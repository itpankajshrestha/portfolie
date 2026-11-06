(function () {
    'use strict';

    var T = window.TRANSLATIONS || {};
    var LANGS = Object.keys(T);
    var DEFAULT_LANG = 'en';
    var root = document.documentElement;
    var currentLang = DEFAULT_LANG;

    function store(key, value) {
        try { localStorage.setItem(key, value); } catch (e) { /* private mode etc. */ }
    }

    /* ---------- Language (?lang=en | ?lang=de) ---------- */

    function t(key, lang) {
        lang = lang || currentLang;
        var table = T[lang] || {};
        if (Object.prototype.hasOwnProperty.call(table, key)) return table[key];
        if (LANGS.length && window.console) console.warn('[i18n] Missing "' + key + '" for "' + lang + '"');
        return (T[DEFAULT_LANG] || {})[key];
    }

    function langFromUrl() {
        var q = (new URLSearchParams(location.search).get('lang') || '').toLowerCase();
        return LANGS.indexOf(q) > -1 ? q : null;
    }

    function applyLang(lang) {
        currentLang = lang;
        root.lang = lang;

        document.querySelectorAll('[data-i18n]').forEach(function (el) {
            var value = t(el.getAttribute('data-i18n'));
            if (value != null) el.textContent = value;
        });

        document.querySelectorAll('[data-i18n-attr]').forEach(function (el) {
            el.getAttribute('data-i18n-attr').split(';').forEach(function (pair) {
                var parts = pair.split(':');
                var attr = (parts[0] || '').trim();
                var key = (parts[1] || '').trim();
                if (!attr || !key) return;
                var value = t(key);
                if (value != null) el.setAttribute(attr, value);
            });
        });

        var title = t('meta.title');
        var description = t('meta.description');
        if (title) {
            document.title = title;
            var ogTitle = document.querySelector('meta[property="og:title"]');
            if (ogTitle) ogTitle.setAttribute('content', title);
        }
        if (description) {
            ['meta[name="description"]', 'meta[property="og:description"]'].forEach(function (sel) {
                var m = document.querySelector(sel);
                if (m) m.setAttribute('content', description);
            });
        }

        document.querySelectorAll('[data-set-lang]').forEach(function (a) {
            if (a.getAttribute('data-set-lang') === lang) a.setAttribute('aria-current', 'true');
            else a.removeAttribute('aria-current');
        });

        syncThemeButton();
        root.classList.remove('i18n-pending');
    }

    function setLang(lang, historyMode) {
        if (LANGS.indexOf(lang) < 0) lang = DEFAULT_LANG;
        applyLang(lang);
        store('lang', lang);

        // Keep the language in the address bar (…/?lang=en) so links can be shared.
        try {
            var url = new URL(location.href);
            if (url.searchParams.get('lang') !== lang) {
                url.searchParams.set('lang', lang);
                history[historyMode === 'push' ? 'pushState' : 'replaceState'](null, '', url.toString());
            }
        } catch (e) { /* e.g. file:// in some browsers */ }
    }

    document.querySelectorAll('[data-set-lang]').forEach(function (a) {
        a.addEventListener('click', function (event) {
            event.preventDefault();
            var lang = a.getAttribute('data-set-lang');
            if (lang !== currentLang) setLang(lang, 'push');
        });
    });

    window.addEventListener('popstate', function () {
        var lang = langFromUrl();
        if (lang && lang !== currentLang) applyLang(lang);
    });

    /* ---------- Theme (light / dark) ---------- */

    var themeButton = document.querySelector('[data-theme-toggle]');
    var darkQuery = window.matchMedia ? window.matchMedia('(prefers-color-scheme: dark)') : null;

    function activeTheme() {
        var set = root.getAttribute('data-theme');
        if (set === 'light' || set === 'dark') return set;
        return darkQuery && darkQuery.matches ? 'dark' : 'light';
    }

    function syncThemeButton() {
        if (!themeButton) return;
        var label = t(activeTheme() === 'dark' ? 'theme.toLight' : 'theme.toDark');
        if (label) {
            themeButton.setAttribute('aria-label', label);
            themeButton.setAttribute('title', label);
        }
    }

    if (themeButton) {
        themeButton.addEventListener('click', function () {
            var next = activeTheme() === 'dark' ? 'light' : 'dark';
            root.setAttribute('data-theme', next);
            store('theme', next);
            syncThemeButton();
        });
    }
    if (darkQuery) {
        var onSchemeChange = function () { syncThemeButton(); };
        if (darkQuery.addEventListener) darkQuery.addEventListener('change', onSchemeChange);
        else if (darkQuery.addListener) darkQuery.addListener(onSchemeChange);
    }

    /* ---------- Mobile menu ---------- */

    var menuButton = document.querySelector('[data-menu-toggle]');
    var nav = document.getElementById('site-nav');

    function setMenu(open) {
        if (!menuButton || !nav) return;
        menuButton.setAttribute('aria-expanded', String(open));
        nav.classList.toggle('is-open', open);
    }

    if (menuButton && nav) {
        menuButton.addEventListener('click', function () {
            setMenu(menuButton.getAttribute('aria-expanded') !== 'true');
        });
        nav.addEventListener('click', function (event) {
            if (event.target.closest('a')) setMenu(false);
        });
        document.addEventListener('keydown', function (event) {
            if (event.key === 'Escape' && menuButton.getAttribute('aria-expanded') === 'true') {
                setMenu(false);
                menuButton.focus();
            }
        });
        document.addEventListener('click', function (event) {
            if (!event.target.closest('.site-header')) setMenu(false);
        });
    }

    /* ---------- Header border + active nav link ---------- */

    var header = document.querySelector('.site-header');
    function onScroll() {
        if (header) header.classList.toggle('is-scrolled', window.scrollY > 8);
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    var navLinks = Array.prototype.slice.call(document.querySelectorAll('.site-nav a[href^="#"]'));
    if ('IntersectionObserver' in window && navLinks.length) {
        var byId = {};
        navLinks.forEach(function (a) { byId[a.getAttribute('href').slice(1)] = a; });
        var spy = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (!entry.isIntersecting) return;
                navLinks.forEach(function (a) { a.classList.remove('is-active'); a.removeAttribute('aria-current'); });
                var link = byId[entry.target.id];
                if (link) { link.classList.add('is-active'); link.setAttribute('aria-current', 'true'); }
            });
        }, { rootMargin: '-45% 0px -50% 0px' });
        Object.keys(byId).forEach(function (id) {
            var section = document.getElementById(id);
            if (section) spy.observe(section);
        });
    }

    /* ---------- Contact form (Formspree, without leaving the page) ---------- */

    var form = document.querySelector('[data-contact-form]');
    var statusEl = form && form.querySelector('[data-form-status]');

    function setStatus(key, state) {
        if (!statusEl) return;
        if (key) {
            statusEl.setAttribute('data-i18n', key); // re-translated if the language changes
            statusEl.textContent = t(key);
        } else {
            statusEl.removeAttribute('data-i18n');
            statusEl.textContent = '';
        }
        if (state) statusEl.setAttribute('data-state', state);
        else statusEl.removeAttribute('data-state');
    }

    if (form && window.fetch && window.FormData) {
        form.addEventListener('submit', function (event) {
            event.preventDefault();
            var button = form.querySelector('button[type="submit"]');
            if (button) button.disabled = true;
            setStatus('contact.sending', 'pending');

            fetch(form.action, {
                method: 'POST',
                body: new FormData(form),
                headers: { Accept: 'application/json' }
            }).then(function (response) {
                if (!response.ok) throw new Error('HTTP ' + response.status);
                form.reset();
                setStatus('contact.success', 'success');
            }).catch(function () {
                setStatus('contact.error', 'error');
            }).then(function () {
                if (button) button.disabled = false;
            });
        });
    }

    /* ---------- Footer year ---------- */

    document.querySelectorAll('[data-year]').forEach(function (el) {
        el.textContent = String(new Date().getFullYear());
    });

    /* ---------- Start ---------- */

    if (LANGS.length) {
        setLang(langFromUrl() || (LANGS.indexOf(root.lang) > -1 ? root.lang : DEFAULT_LANG), 'replace');
    } else {
        // translations.js did not load: keep the English text that is in the HTML.
        root.lang = DEFAULT_LANG;
        root.classList.remove('i18n-pending');
    }
})();

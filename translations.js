/*
 * All site text, per language. Elements in index.html point at these keys with
 * data-i18n="key" (text) or data-i18n-attr="attribute:key" (attributes).
 * The English strings here must match the text written in index.html, which is
 * what visitors without JavaScript see.
 *
 * To add a language: copy the "en" block, translate it, and add the code to
 * the `langs` list in the inline script in index.html and a button to the
 * .lang-switch group.
 */
window.TRANSLATIONS = {
    en: {
        'meta.title': 'Pankaj Shrestha — Computer Engineering Student',
        'meta.description': 'Portfolio of Pankaj Shrestha, Computer Engineering student at TH Köln: projects, skills and contact.',

        'skip': 'Skip to content',
        'nav.label': 'Main navigation',
        'nav.menu': 'Menu',
        'nav.about': 'About',
        'nav.projects': 'Projects',
        'nav.skills': 'Skills',
        'nav.contact': 'Contact',
        'lang.label': 'Language',
        'theme.toLight': 'Switch to light theme',
        'theme.toDark': 'Switch to dark theme',

        'hero.eyebrow': 'Computer Engineering · TH Köln',
        'hero.title': "Hi, I'm Pankaj Shrestha.",
        'hero.lead': 'Computer Engineering student at TH Köln. I like turning theory into working software — mostly in Java, with Python and Vue along the way.',
        'hero.ctaProjects': 'View projects',
        'hero.ctaContact': 'Get in touch',

        'about.label': 'About',
        'about.title': 'A bit about me',
        'about.p1': 'I study Computer Engineering (Technische Informatik) at TH Köln.',
        'about.p2': 'As a motivated student, I have built up broad programming skills, especially in Java, which is my core programming language.',
        'about.p3': 'My studies are very hands-on, and I have proven my software development skills through successful projects and internships.',
        'about.p4': 'With strong analytical skills and a deep understanding of algorithms and computer systems, I want to put theory into practice and keep growing professionally.',
        'about.studyLabel': 'Studying',
        'about.studyValue': 'Computer Engineering',
        'about.uniLabel': 'University',
        'about.focusLabel': 'Focus',
        'about.focusValue': 'Java & software development',

        'projects.label': 'Projects',
        'projects.title': 'Selected projects',
        'projects.intro': 'A selection of my repositories on GitHub.',
        'projects.miniTaskLogger': 'A small Vue app for logging tasks.',
        'projects.selectablePdf': 'A Python project for producing PDFs with selectable text.',
        'projects.springWeb': 'A Java web application built with the Spring framework.',
        'projects.openPdf': 'A Python project for opening and working with PDF files.',
        'projects.junit': 'Unit testing in Java with JUnit.',
        'projects.portfolio': 'This website: a bilingual (English/German) portfolio in plain HTML, CSS and JavaScript, deployed with GitHub Pages.',
        'projects.all': 'All repositories on GitHub',

        'skills.label': 'Skills',
        'skills.title': 'What I work with',
        'skills.languages': 'Languages',
        'skills.tools': 'Frameworks & tools',
        'skills.fundamentals': 'Fundamentals',
        'skills.algorithms': 'Algorithms & data structures',
        'skills.oop': 'Object-oriented programming',
        'skills.testing': 'Software testing',
        'skills.architecture': 'Computer architecture',

        'contact.label': 'Contact',
        'contact.title': "Let's talk",
        'contact.intro': 'Have a question, an internship opportunity or just want to say hello? Send me a message or reach out on LinkedIn.',
        'contact.name': 'Name',
        'contact.namePlaceholder': 'Your name',
        'contact.email': 'Email address',
        'contact.message': 'Message',
        'contact.messagePlaceholder': 'What would you like to talk about?',
        'contact.send': 'Send message',
        'contact.sending': 'Sending…',
        'contact.success': 'Thank you! Your message has been sent.',
        'contact.error': 'Sorry, the message could not be sent. Please try again or reach out on LinkedIn.',

        'footer.rights': 'All rights reserved.',
        'footer.top': 'Back to top'
    },

    de: {
        'meta.title': 'Pankaj Shrestha — Student der Technischen Informatik',
        'meta.description': 'Portfolio von Pankaj Shrestha, Student der Technischen Informatik an der TH Köln: Projekte, Kenntnisse und Kontakt.',

        'skip': 'Zum Inhalt springen',
        'nav.label': 'Hauptnavigation',
        'nav.menu': 'Menü',
        'nav.about': 'Über mich',
        'nav.projects': 'Projekte',
        'nav.skills': 'Kenntnisse',
        'nav.contact': 'Kontakt',
        'lang.label': 'Sprache',
        'theme.toLight': 'Zum hellen Design wechseln',
        'theme.toDark': 'Zum dunklen Design wechseln',

        'hero.eyebrow': 'Technische Informatik · TH Köln',
        'hero.title': 'Hallo, ich bin Pankaj Shrestha.',
        'hero.lead': 'Student der Technischen Informatik an der TH Köln. Ich setze Theorie gern in funktionierende Software um — vor allem mit Java, daneben auch mit Python und Vue.',
        'hero.ctaProjects': 'Projekte ansehen',
        'hero.ctaContact': 'Kontakt aufnehmen',

        'about.label': 'Über mich',
        'about.title': 'Ein paar Worte über mich',
        'about.p1': 'Ich studiere Technische Informatik an der TH Köln.',
        'about.p2': 'Als motivierter Student habe ich mir umfangreiche Programmierkenntnisse angeeignet, insbesondere in Java, das mir als grundlegende Programmiersprache dient.',
        'about.p3': 'Mein Studium ist sehr praxisorientiert, und ich habe meine Fähigkeiten in der Softwareentwicklung durch erfolgreiche Projekte und Praktika unter Beweis gestellt.',
        'about.p4': 'Mit starken analytischen Fähigkeiten und einem tiefen Verständnis von Algorithmen und Computern strebe ich danach, meine theoretischen Kenntnisse in die Praxis umzusetzen und meine berufliche Entwicklung voranzutreiben.',
        'about.studyLabel': 'Studium',
        'about.studyValue': 'Technische Informatik',
        'about.uniLabel': 'Hochschule',
        'about.focusLabel': 'Schwerpunkt',
        'about.focusValue': 'Java & Softwareentwicklung',

        'projects.label': 'Projekte',
        'projects.title': 'Ausgewählte Projekte',
        'projects.intro': 'Eine Auswahl meiner Repositories auf GitHub.',
        'projects.miniTaskLogger': 'Eine kleine Vue-App zum Protokollieren von Aufgaben.',
        'projects.selectablePdf': 'Ein Python-Projekt, um PDFs mit markierbarem Text zu erzeugen.',
        'projects.springWeb': 'Eine Java-Webanwendung auf Basis des Spring Frameworks.',
        'projects.openPdf': 'Ein Python-Projekt zum Öffnen und Bearbeiten von PDF-Dateien.',
        'projects.junit': 'Unit-Tests in Java mit JUnit.',
        'projects.portfolio': 'Diese Website: ein zweisprachiges Portfolio (Englisch/Deutsch) mit reinem HTML, CSS und JavaScript, veröffentlicht über GitHub Pages.',
        'projects.all': 'Alle Repositories auf GitHub',

        'skills.label': 'Kenntnisse',
        'skills.title': 'Womit ich arbeite',
        'skills.languages': 'Programmiersprachen',
        'skills.tools': 'Frameworks & Tools',
        'skills.fundamentals': 'Grundlagen',
        'skills.algorithms': 'Algorithmen & Datenstrukturen',
        'skills.oop': 'Objektorientierte Programmierung',
        'skills.testing': 'Softwaretests',
        'skills.architecture': 'Rechnerarchitektur',

        'contact.label': 'Kontakt',
        'contact.title': 'Schreiben Sie mir',
        'contact.intro': 'Sie haben eine Frage, ein Praktikumsangebot oder möchten einfach Hallo sagen? Schicken Sie mir eine Nachricht oder kontaktieren Sie mich über LinkedIn.',
        'contact.name': 'Name',
        'contact.namePlaceholder': 'Ihr Name',
        'contact.email': 'E-Mail-Adresse',
        'contact.message': 'Nachricht',
        'contact.messagePlaceholder': 'Worum geht es?',
        'contact.send': 'Nachricht senden',
        'contact.sending': 'Wird gesendet …',
        'contact.success': 'Vielen Dank! Ihre Nachricht wurde gesendet.',
        'contact.error': 'Die Nachricht konnte leider nicht gesendet werden. Bitte versuchen Sie es erneut oder schreiben Sie mir über LinkedIn.',

        'footer.rights': 'Alle Rechte vorbehalten.',
        'footer.top': 'Nach oben'
    }
};

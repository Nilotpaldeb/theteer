// obtain cookieconsent plugin
var cc = initCookieConsent();

// run plugin with config object
cc.run({
    current_lang: 'en',
    autoclear_cookies: true,
    cookie_name: 'cc_cookie_theteer',
    cookie_expiration: 365,
    page_scripts: true,
    force_consent: true,

    gui_options: {
        consent_modal: {
            layout: 'cloud',
            position: 'bottom center',
            transition: 'slide'
        },
        settings_modal: {
            layout: 'bar',
            position: 'left',
            transition: 'slide'
        }
    },

    onFirstAction: function(){
        console.log('onFirstAction fired');
    },

    onAccept: function (cookie) {
        console.log('onAccept fired!')
    },

    onChange: function (cookie, changed_preferences) {
        console.log('onChange fired!');

        if (!cc.allowedCategory('analytics')) {
            typeof gtag === 'function' && gtag('consent', 'update', {
                'analytics_storage': 'denied'
            });
        }
    },

    languages: {
        'en': {
            consent_modal: {
                title: 'Hello traveller, it\'s cookie time!',
                description: 'Our website uses essential cookies to ensure its proper operation and tracking cookies to understand how you interact with it. The latter will be set only after consent. <a href="#privacy-policy" class="cc-link">Privacy policy</a>',
                primary_btn: {
                    text: 'Accept all',
                    role: 'accept_all'
                },
                secondary_btn: {
                    text: 'Preferences',
                    role: 'settings'
                },
                revision_message: '<br><br> Dear user, terms and conditions have changed since the last time you visisted!'
            },
            settings_modal: {
                title: 'Cookie settings',
                save_settings_btn: 'Save current selection',
                accept_all_btn: 'Accept all',
                reject_all_btn: 'Reject all',
                close_btn_label: 'Close',
                cookie_table_headers: [
                    {col1: 'Name'},
                    {col2: 'Domain'},
                    {col3: 'Expiration'}
                ],
                blocks: [
                    {
                        title: 'Cookie usage',
                        description: 'Select the purposes for which you allow the use of cookies and similar technologies. You can change your settings at any time by selecting "Cookie Settings" at the bottom of the site. Learn more about our <a href="https://theteer.com/privacy/" class="cc-link">Privacy Policy</a>.'
                    }, {
                        title: 'Strictly necessary cookies',
                        description: "Necessary cookies and similar technologies implements the basic functions of the website such as page navigation, use of forms and shopping cart functionality. Without these technologies the website will not work properly.",
                        toggle: {
                            value: 'necessary',
                            enabled: true,
                            readonly: true
                        }
                    }, {
                        title: 'Analytics & Performance cookies',
                        description: 'Analytics and user experience related cookies and similar technologies allow us to collect information about how our website is used. This information helps us to improve the content and usability of the website.',
                        toggle: {
                            value: 'analytics',
                            enabled: false,
                            readonly: false
                        },
                    }, {
                        title: 'Targeting & Advertising cookies',
                        description: 'If this category is deselected, <b>the page will reload when preferences are saved</b>... <br><br>(demo example with reload option enabled, for scripts like microsoft clarity which will re-set cookies and send beacons even after the cookies have been cleared by the cookieconsent\'s autoclear function)',
                        toggle: {
                            value: 'targeting',
                            enabled: false,
                            readonly: false,
                            reload: 'on_disable'
                        },
                    }, {
                        title: 'More information',
                        description: "If you are facing any issues related to Cookies, please feel free to <a class="cc-link" href="https://theteer.com/contact-us/">Contact us</a>.',
                    }
                ]
            }
        }
    }
});
kasnah
======

Kasnah will provide automatic and real-time crisis resource suggestions for users of community software. The support resources presented to users will come in a variety of mediums: email, IM, text message (only for veterans or those who know veterans at this time) or phone (potentially free through an online phone service). The goal is to make this available for as many community platforms as possible (e.g. Drupal, vBulletin, Vanilla Forums, Wordpress, etc.) in the most efficient way without over-promising or creating unrealistic expectations through working with existing researchers, experts and crisis clinics themselves.

Currently, it is just a demo and is not optimized, testeed or reviewed by mental health professionals, so it should not be used in any production environment.

The demo at [kasnah.org](http://www.kasnah.org/) allows you to see a simple implementation of the script (kasnah.js) with  the front-end framework, [Foundation](http://foundation.zurb.com/). In the future, the script will be easy to drop into any community website with minimal configuration.

With the demo, you can see the script detect crisis or suicide related keywords before a post is made, pop up a screening dialogue window and, if desired, worldwide crisis resource information. If there isn't any interest in the information or there are false positives, then the selection to no longer be alerted will stored in a cookie and and no more alerts will be made.

It requires jQuery, jQuery UI (for Dialogue), and jQuery Cookie Master (to save user preferences not to see popups anymore).


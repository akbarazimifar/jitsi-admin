import $ from 'jquery';
import * as mdb from 'mdb-ui-kit'; // lib
global.$ = global.jQuery = $;
import Push from "push.js";
import {initDarkmodeSwitch} from './switchDarkmode'
import {setSnackbar} from './myToastr'
import notificationSound from '../sound/notification.mp3'
import {initAdhocMeeting} from './adhoc'
import {initWebsocket} from './websocket'

var audio = new Audio(notificationSound);
import {TabUtils} from './tabBroadcast';
import {getCookie} from './cookie';
import {initLayzLoading} from './lazyLoading'
import hotkeys from 'hotkeys-js';
import {initStatus} from "./onlineStatus";
import {inIframe} from "./moderatorIframe";

function initGenerell() {
    Push.Permission.request();
    initDarkmodeSwitch();
    initLayzLoading();
    if (inIframe()) {
        document.body.classList.add("in-iframe");
    }
    if(window.innerWidth < 768 ){
        document.body.classList.add("in-smartPhone");
    }
    openBlankTarget(blankTarget);
    initAdhocMeeting(confirmTitle, confirmCancel, confirmOk);
    hotkeys('1', function (event, handler) {
        $('#ex1-tab-1-tab').trigger('click');
    });
    hotkeys('2', function (event, handler) {
        $('#ex1-tab-3-tab').trigger('click');
    });
    hotkeys('3', function (event, handler) {
        $('#ex1-tab-2-tab').trigger('click');
    });
    hotkeys('a', function (event, handler) {
        const myModalEl = document.getElementById('modalAdressbook');
        if (!myModalEl.classList.contains('show')) {
            const modal = new mdb.Modal(myModalEl)
            modal.show();
        }
        $('#home-tab').trigger('click');
    });
    hotkeys('g', function (event, handler) {

        const myModalEl = document.getElementById('modalAdressbook');
        if (!myModalEl.classList.contains('show')) {
            const modal = new mdb.Modal(myModalEl)
            modal.show();
        }
        $('#profile-tab').trigger('click');
    });
    hotkeys('n', function (event, handler) {
        $('#createNewConference').trigger('click');
    });
    initWebsocket(websocketTopics);
}

function openBlankTarget(targets) {
    targets.forEach(function (value, i) {
        window.open(value);
    })
}

export {initGenerell}
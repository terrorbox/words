/*
 * Words
 *
 * Highlight jargon, weasel words, passive voice, adverbs, and cliches.
 * Terorrbox | terrorbox.org
 *
 * [NB: words.js is built using build.sh, so don't rely on changes made here.]
 */

javascript:(function () {

    // list of words to avoid
    var words = [
    	    ['above',"Don't use to mean 'previous.'"],
            ['a number of',"Too complex. Try to simplify."],
            ['abundance',"Too complex. Try to simplify."],
            ['accompany',"Too complex. Try to simplify."],
            ['accrue',"Too complex. Try to simplify."],
            ['acquire',"Too complex. Try to simplify."],
            ['actioned',"Too complex. Try to simplify."],
            ['additional',"Try 'extra' or 'more'."],
            ['adjacent to',"Too complex. Try to simplify."],
            ['advantageous',"Too complex. Try to simplify."],
            ['adversely impact',"Too complex. Try to simplify."],
            ['aforementioned',"Too complex. Try to simplify."],
            ['against the grain',"cliche"],
            ['agenda',"do not use use unless referring to something for a meeting."],
            ['aggregate',"Too complex. Try to simplify."],
            ['all of',"Why not just 'all' (Unless followed by a pronoun)?"],
            ['alleviate',"Too complex. Try to simplify."],
            ['allocate',"Too complex. Try to simplify."],
            ['along the lines of',"Too complex. Try to simplify."],
            ['alternatively',"Instead? But?"],
            ['approximately',"Consider 'about'."],
            ['as a means of',"Too complex. Try to simplify."],
            ['as of yet',"Too complex. Try to simplify."],
            ['as to',"Use 'about' or 'on'."],
            ['ascertain',"Too complex. Try to simplify."],
            ['assist',"Consider 'help'."],
            ['assistance',"Consider 'help'."],
            ['assisting',"Consider 'helping'."],
            ['at this time'],
            ['attain',"Too complex. Try to simplify."],
            ['back to square one',"cliche"],
            ['baseline',"cliche"],
            ['beacon',"cliche"],
            ['because of the fact that',"Too complex. Try to simplify."],
            ['being done',"Use the active voice. 'We are doing this.'"],
            ['belated',"Too complex. Try to simplify.. Use 'late'."],
            ['below',"Don't use to mean 'following.'"],
            ['by examination',"Why not 'by examining'?"],
            ['by virtue of',"Too complex. Try to simplify."],
            ['close proximity',"Use 'close'."],
            ['commence',"Use 'start'."],
            ['commit',"weasel word"],
            ['comply with',"jargon"],
            ['consequently',"Too complex. Try to simplify."],
            ['demonstrate',"Use 'show'."],
            ['demonstrates',"Use 'shows'."],
            ['depart',"Too complex. Try to simplify."],
            ['designate',"Too complex. Try to simplify."],
            ['discontinue',"Too complex. Try to simplify.. Consider 'stop'."],
            ['discourse',"Too complex. Try to simplify.. Consider 'discussion'."],
            ['drive forward',"Eww. No."],
            ['drive out',"Unless it is cattle."],
            ['drive',"You can only drive vehicles. Not schemes or people."],
            ['driven forward',"Eww. No."],
            ['driving forward',"Eww. No."],
            ['due to the fact that',"Too complex. Try to simplify."],
            ['each and every',"Too complex. Try to simplify."],
            ['eliminate',"Too complex. Try to simplify."],
            ['employ',"Consider 'use'."],
            ['empower',"Weasel word. Use sparingly."],
            ['endeavor',"Consider 'try'."],
            ['evaluate',"weasel word"],
            ['exclusively',"weasel word"],
            ['exhibit',"weasel word"],
            ['expected in the near future',"weasel phrase"],
            ['expend',"Too complex. Try to simplify."],
            ['facilitate',"Instead, say something specific about how you're helping.'"],
            ['facilitating',"Instead, say something specific about how you're helping."],
            ['feasible',"weasel word"],
            ['finalize', "Too complex. Try to simplify."],
            ['first and foremost',"Too complex. Try to simplify."],
            ['focusing',"Avoid. Unless using in the photographic sense."],
            ['for the purpose of',"Too complex. Try to simplify."],
            ['foster',"weasel word"],
            ['fostering',"weasel word"],
            ['framework',"jargon"],
            ['functionality',"jargon"],
            ['go forward',"jargon"],
            ['going forward',"jargon"],
            ['holistic',"jargon"],
            ['honest truth',"weasel phrase"],
            ['however',"Too complex. Try to simplify.. Use 'but' or 'yet'."],
            ['hurdle',"Jargon. Consider 'difficulty'."],
            ['if and when',"jargon"],
            ['impact',"do not use use it as a verb."],
            ['impacted',"do not use use it as a verb."],
            ['implement', "jargon"],
            ['in a timely manner',"Superfluous–don’t use it."],
            ['in accordance with',"Superfluous–don’t use it."],
            ['in addition',"Superfluous–don’t use it."],
            ['in all likelihood',"Superfluous–don’t use it."],
            ['in an effort to',"Superfluous–don’t use it."],
            ['in between'],
            ['in excess of',"Superfluous–don’t use it."],
            ['in lieu of',"Superfluous–don’t use it."],
            ['in light of the fact that',"Superfluous–don’t use it."],
            ['in many cases',"Too complex. Try to simplify."],
            ['in order to',"Use 'to' instead."],
            ['in regard to',"Too complex. Try to simplify."],
            ['in some instances',"Too complex. Try to simplify."],
            ['in terms of',"Too complex. Try to simplify."],
            ['in the interests of',"Too complex. Try to simplify."],
            ['in the near future',"Too complex. Try to simplify."],
            ['in the process of',"Too complex. Try to simplify."],
            ['incentivize',"jargon"],
            ['incentivize',"jargon"],
            ['incentivized',"jargon"],
            ['incentivizing',"jargon"],
            ['incentivizing',"jargon"],
            ['inception',"jargon"],
            ['incumbent upon',"Too complex. Try to simplify."],
            ['indication',"Too complex. Try to simplify."],
            ['initiate',"Too complex. Try to simplify."],
            ['initiating',"Too complex. Try to simplify."],
            ['initiative',"jargon"],
            ['is applicable to',"Too complex. Try to simplify."],
            ['is authorized to',"Too complex. Try to simplify."],
            ['is responsible for',"Too complex. Try to simplify."],
            ['it is essential',"jargon"],
            ['key',"Unless it unlocks something. A subject/thing isn't 'key.' It is probably 'important' though."],
            ['leverage',"jargon"],
            ['leveraging',"jargon"],
            ['liaise',"jargon"],
            ['liaising',"jargon"],
            ['low hanging fruit',"jargon"],
            ['low-hanging fruit',"jargon"],
            ['methodology',"Too complex. Try to simplify."],
            ['minimize',"Too complex. Try to simplify."],
            ['modify',"Too complex. Try to simplify."],
            ['monitor',"Too complex. Try to simplify."],
            ['moving forward',"Too complex. Try to simplify."],
            ['moving toward',"Too complex. Try to simplify."],
            ['multiple',"Too complex. Try to simplify."],
            ['necessitate',"Too complex. Try to simplify."],
            ['nevertheless',"Too complex. Try to simplify."],
            ['new controls',"Journalese, Keith Waterhouse, On Newspaper Style"],
            ['not certain',"Use 'uncertain'."],
            ['not many',"Too complex. Try to simplify."],
            ['not often',"Too complex. Try to simplify."],
            ['notwithstanding',"Too complex. Try to simplify."],
            ['null and void',"jargon"],
            ['numerous',"Too complex. Try to simplify."],
            ['objective',"jargon"],
            ['obligate',"jargon"],
            ['obtain',"Too complex. Try to simplify."],
            ['on the contrary',"Too complex. Try to simplify."],
            ['on the other hand',"cliche"],
            ['one particular',"Too complex. Try to simplify."],
            ['optimum',"jargon"],
            ['overarching',"jargon"],
            ['paradigm',"jargon"],
            ['pertaining to',"Too complex. Try to simplify."],
            ['point in time',"Too complex. Try to simplify."],
            ['possess',"Too complex. Try to simplify."],
            ['previously',"Too complex. Try to simplify."],
            ['prior to',"Too complex. Try to simplify."],
            ['proactive',"weasel word"],
            ['process driven',"weasel phrase"],
            ['provided that',"Too complex. Try to simplify."],
            ['put simply',"condescending—avoid"],
            ['reach out to',"Consider 'contact'."],
            ['reached out to',"Consider 'contacted'."],
            ['readily apparent',"Too complex. Try to simplify."],
            ['refer back',"Too complex. Try to simplify."],
            ['regarding',"Too complex. Try to simplify."],
            ['remainder',"Too complex. Try to simplify."],
            ['reside',"Too complex. Try to simplify."],
            ['retain',"Consider 'keep'."],
            ['robust',"Too complex. Try to simplify."],
            ['satisfy',"Too complex. Try to simplify."],
            ['should you wish',"Too complex. Try to simplify."],
            ['solicit',"Too complex. Try to simplify."],
            ['span across',"Too complex. Try to simplify."],
            ['stakeholder',"jargon"],
            ['status quo',"jargon"],
            ['subsequent',"Too complex. Try to simplify."],
            ['substantial',"Too complex. Try to simplify."],
            ['successfully complete',"Too complex. Try to simplify."],
            ['such as',"Consider 'like'."],
            ['sufficient',"Too complex. Try to simplify."],
            ['sustainable',"jargon"],
            ['tackle',"jargon"],
            ['tackled',"jargon"],
            ['tackling',"jargon"],
            ['terminate',"Too complex. Try to simplify."],
            ['the fact that',"Too complex. Try to simplify."],
            ['the month of',"Too complex. Try to simplify."],
            ['therefore',"Too complex. Try to simplify."],
            ['time period',"Too complex. Try to simplify."],
            ['utilize',"Write 'use'."],
            ['utilized',"Write 'used'."],
            ['utilizing',"Write 'using'."],
            ['utilization',"Too complex. Try to simplify."],
            ['various different',"Too complex. Try to simplify."],
            ['very',"weasel word"],
            ['with respect to',"wordy"],
            ['with the exception of',"wordy"],
            ['been',"passive"],
            ['become',"passive"],
            ['begun',"passive"],
            ['was built',"passive"],
            ['chosen',"passive"],
            ['eaten',"passive"],
            ['fallen',"passive"],
            ['forbidden',"Too harsh."],
            ['gotten',"passive"],
            ['given',"passive"],
            ['hit',"Passive. Also: use click, tap, select, or highlight."],
            ['kept',"passive"],
            ['proven',"passive"],
            ['have read',"passive"],
            ['have run',"passive"],
            ['have said',"passive"],
            ['seen',"passive"],
            ['have sent',"passive"],
            ['were sent',"passive"],
            ['have set',"passive"],
            ['were set',"passive"],
            ['were stuck',"passive"],
            ['were written',"passive"],
            ['was written',"passive"],
            ['are a number',"weasel phrase"],
            ['exceedingly',"weasel word"],
            ['excellent',"weasel word"],
            ['extremely',"weasel word"],
            ['fairly',"weasel word"],
            ['few',"weasel word"],
            ['huge',"weasel word"],
            ['interestingly',"weasel word"],
            ['is a number',"weasel word"],
            ['largely',"weasel word"],
            ['many',"weasel word"],
            ['mostly',"weasel word"],
            ['obviously',"weasel word"],
            ['quite',"weasel word"],
            ['relatively',"weasel word"],
            ['remarkably',"weasel word"],
            ['several',"weasel word"],
            ['significantly',"weasel word"],
            ['substantially',"weasel word"],
            ['surprisingly',"weasel word"],
            ['tiny',"weasel word"],
            ['various',"weasel word"],
            ['vast',"weasel word"],
            ['absolutel',"adverb"],
            ['accidentall',"adverb"],
            ['additionall',"adverb"],
            ['allegedl',"adverb"],
            ['alternativel',"adverb"],
            ['angril',"adverb"],
            ['anxiousl',"adverb"],
            ['approximatel',"adverb"],
            ['awkwardl',"adverb"],
            ['badl',"adverb"],
            ['barel',"adverb"],
            ['beautifull',"adverb"],
            ['blindl',"adverb"],
            ['boldl',"adverb"],
            ['bravel',"adverb"],
            ['brightl',"adverb"],
            ['briskl',"adverb"],
            ['bristl',"adverb"],
            ['bubbl',"adverb"],
            ['busil',"adverb"],
            ['calml',"adverb"],
            ['carefull',"adverb"],
            ['carelessl',"adverb"],
            ['cautiousl',"adverb"],
            ['cheerfull',"adverb"],
            ['clearl',"adverb"],
            ['closel',"adverb"],
            ['coldl',"adverb"],
            ['completel',"adverb"],
            ['consequentl',"adverb"],
            ['correctl',"adverb"],
            ['courageousl',"adverb"],
            ['crinkl',"adverb"],
            ['cruell',"adverb"],
            ['crumbl',"adverb"],
            ['cuddl',"adverb"],
            ['currentl',"adverb"],
            ['dail',"adverb"],
            ['daringl',"adverb"],
            ['deadl',"adverb"],
            ['definitel',"adverb"],
            ['deliberatel',"adverb"],
            ['doubtfull',"adverb"],
            ['dumbl',"adverb"],
            ['eagerl',"adverb"],
            ['earl',"adverb"],
            ['easil',"adverb"],
            ['elegantl',"adverb"],
            ['enormousl',"adverb"],
            ['enthusiasticall',"adverb"],
            ['equall',"adverb"],
            ['especiall',"adverb"],
            ['eventuall',"adverb"],
            ['exactl',"adverb"],
            ['exceedingl',"adverb"],
            ['exclusivel',"adverb"],
            ['extremel',"adverb"],
            ['fairl',"adverb"],
            ['faithfull',"adverb"],
            ['fatall',"adverb"],
            ['fiercel',"adverb"],
            ['finall',"adverb"],
            ['fondl',"adverb"],
            ['foolishl',"adverb"],
            ['fortunatel',"adverb"],
            ['frankl',"adverb"],
            ['franticall',"adverb"],
            ['generousl',"adverb"],
            ['gentl',"adverb"],
            ['giggl',"adverb"],
            ['gladl',"adverb"],
            ['gracefull',"adverb"],
            ['greedil',"adverb"],
            ['happil',"adverb"],
            ['hardl',"adverb"],
            ['hastil',"adverb"],
            ['healthil',"adverb"],
            ['heartil',"adverb"],
            ['honestl',"adverb"],
            ['hourl',"adverb"],
            ['hungril',"adverb"],
            ['hurriedl',"adverb"],
            ['immediatel',"adverb"],
            ['impatientl',"adverb"],
            ['inadequatel',"adverb"],
            ['ingeniousl',"adverb"],
            ['innocentl',"adverb"],
            ['inquisitivel',"adverb"],
            ['interestingl',"adverb"],
            ['irritabl',"adverb"],
            ['jiggl',"adverb"],
            ['joyousl',"adverb"],
            ['justl',"adverb"],
            ['kindl',"adverb"],
            ['largel',"adverb"],
            ['latel',"adverb"],
            ['lazil',"adverb"],
            ['likel',"adverb"],
            ['literall',"adverb"],
            ['lonel',"adverb"],
            ['loosel',"adverb"],
            ['loudl',"adverb"],
            ['loudl',"adverb"],
            ['luckil',"adverb"],
            ['madl',"adverb"],
            ['manl',"adverb"],
            ['mentall',"adverb"],
            ['mildl',"adverb"],
            ['monthl',"adverb"],
            ['mortall',"adverb"],
            ['mostl',"adverb"],
            ['mysteriousl',"adverb"],
            ['neatl',"adverb"],
            ['nervousl',"adverb"],
            ['nightl',"adverb"],
            ['noisil',"adverb"],
            ['normall',"adverb"],
            ['obedientl',"adverb"],
            ['occasionall',"adverb"],
            ['onl',"adverb"],
            ['openl',"adverb"],
            ['painfull',"adverb"],
            ['particularl',"adverb"],
            ['patientl',"adverb"],
            ['perfectl',"adverb"],
            ['politel',"adverb"],
            ['poorl',"adverb"],
            ['powerfull',"adverb"],
            ['presumabl',"adverb"],
            ['previousl',"adverb"],
            ['promptl',"adverb"],
            ['punctuall',"adverb"],
            ['quarterl',"adverb"],
            ['quickl',"adverb"],
            ['quietl',"adverb"],
            ['rapidl',"adverb"],
            ['rarel',"adverb"],
            ['reall',"adverb"],
            ['recentl',"adverb"],
            ['recklessl',"adverb"],
            ['regularl',"adverb"],
            ['relativel',"adverb"],
            ['reluctantl',"adverb"],
            ['remarkabl',"adverb"],
            ['repeatedl',"adverb"],
            ['rightfull',"adverb"],
            ['roughl',"adverb"],
            ['rudel',"adverb"],
            ['sadl',"adverb"],
            ['safel',"adverb"],
            ['selfishl',"adverb"],
            ['sensibl',"adverb"],
            ['seriousl',"adverb"],
            ['sharpl',"adverb"],
            ['shortl',"adverb"],
            ['shyl',"adverb"],
            ['significantl',"adverb"],
            ['silentl',"adverb"],
            ['simpl',"adverb"],
            ['sleepil',"adverb"],
            ['slowl',"adverb"],
            ['smartl',"adverb"],
            ['smell',"adverb"],
            ['smoothl',"adverb"],
            ['softl',"adverb"],
            ['solemnl',"adverb"],
            ['sparkl',"adverb"],
            ['speedil',"adverb"],
            ['stealthil',"adverb"],
            ['sternl',"adverb"],
            ['stupidl',"adverb"],
            ['substantiall',"adverb"],
            ['successfull',"adverb"],
            ['suddenl',"adverb"],
            ['surprisingl',"adverb"],
            ['suspiciousl',"adverb"],
            ['swiftl',"adverb"],
            ['tenderl',"adverb"],
            ['tensel',"adverb"],
            ['thoughtfull',"adverb"],
            ['tightl',"adverb"],
            ['timel',"adverb"],
            ['truthfull',"adverb"],
            ['unexpectedl',"adverb"],
            ['unfortunatel',"adverb"],
            ['usuall',"adverb"],
            ['ver',"adverb"],
            ['victoriousl',"adverb"],
            ['violentl',"adverb"],
            ['vivaciousl',"adverb"],
            ['warml',"adverb"],
            ['waverl',"adverb"],
            ['weakl',"adverb"],
            ['wearil',"adverb"],
            ['weekl',"adverb"],
            ['wildl',"adverb"],
            ['wisel',"adverb"],
            ['worldl',"adverb"],
            ['wrinkl',"adverb"],
            ['yearl',"adverb"],
            ['have the ability to',"Use 'able to' or start with verb."],
            ['take into consideration',"Use 'consider'."],
            ['you can',"Start with verb"],
            ['left-hand',"Use 'left'."],
            ['right-hand',"Use 'right'."],
            ['top',"Use 'upper'."],
            ['bottom',"Use 'lower'."],
            ['within',"Use 'in'."],
            ['fill in',"Use 'input' (for credentials), or 'type x (content) into the field'."],
            ['different from',"Use only when comparing like subjects."],
            ['once',"Avoid as reference to time. Use 'when' if actions are concurrent. Use 'after' in step-by-step instructions."],
            ['since',"Avoid as reference to time. Use 'when' if actions are concurrent. Use 'after' in step-by-step instructions."],
            ['toggle',"Use toggle only when describing a Toggle Columns menu, or to toggle a slider from green to red."],
            ['AB Split',"Use 'A/B Split'."],
            ['app',"Use when referring to mobile apps only. Use 'applications' for web applications."],
            ['auto post',"Use 'auto-post'."],
            ['auto tweet',"Use 'auto-twet'."],
            ['auto translate',"Use 'auto-translate' when referring to the checkbox."],
            ['backend',"Use 'back-end' for adjective or 'back end' for noun."],
            ['double click',"Use 'double-click'."],
            ['dropdown',"Use 'drop-down'."],
            ['drop down',"Use 'drop-down'."],
            ['e-commerce360',"Use 'ecommerce360'."],
            ['ecommerce',"Use e-commerce"],
            ['editing window',"Use 'editing pane'."],
            ['geo-location',"Use 'geolocation'."],
            ['frontend',"Use 'front-end' for adjective or 'front end' for noun."],
            ['home page',"Use 'homepage'."],
            ['pay-as-you-go-plan',"Use 'Pay As You Go Plan'."],
            ['popup',"Use 'pop-up' for noun or adjective and 'pop up' for verb."],
            ['right click',"Use 'right-click'."],
            ['submit',"Avoid unless referring to input type or other text on screen."],
            ['terms of use',"Use 'Terms of Use' when referring to our own. Lowercase if referring to external."],
            ['young',"Don't refer to people using age-related descriptors."],
	    ['old',"Don't refer to people using age-related descriptors."],
	    ['elderly',"Don't refer to people using age-related descriptors."],
	    ['guys',"Don't call a group of people guys."],
	    ['girls',"Don't call women girls."],
    	    ['waitress',"Avoid gendered terms in favor of neutral alternatives."],
    	    ['lesbian',"Don't use as a noun."],
            ['gay',"Don't use as a noun."],
            ['bisexual',"Don't use as a noun."],
	    ['transgender',"Don't use as a noun."],
	    ['trans',"Don't use as a noun."],
	    ['LGBT',"Don't use as a noun."],
	    ['same-sex marriage',"Don't use unless the distinction is relevant to what you’re writing. It's just marriage."],
	    ['mentally ill',"Don't use. Emphasize the person first, not their mental or cognitive condition."],
	    ['blind',"Use the term low vision to describe a person with limited vision. Blind as an adjective is acceptable to descirbe a pereson who is unable to see."],
	    ['###',"Make sure headings are title case and subheadings are sentence case."],
	    ['disabled',"Don't refer to a person's disability unless it's relevant to what you're writing."],
	    ['can\\'t',"Use positive language if you can."],
-	    ['don\\'t',"Use positive language if you can."],
-	    ['won\\'t',"Use positive language if you can."]
	],
	wordsLen = words.length,
	idx;

    function addEvent(elem, eventType, handler) {
        if (elem.addEventListener) {
            elem.addEventListener (eventType, handler, false);
        } else if (elem.attachEvent) {
            handler = function (e) {
                var target = (typeof e.target === 'undefined') ? e.srcElement : e.target;

                handler.call(target, { 'target' : target });
            };
            elem.attachEvent ('on' + eventType, handler);
        } else {
            return false;
        }
    };

	var popup = {
		add : function (element, notes, idx) {
			var popup;

			popup = document.createElement("div");
			popup.id = "wordspopup-" + (idx + 1);
			popup.className = "wordspopup";
			document.body.appendChild(popup);
			popup.innerHTML = notes;
			popup.style.left = element.getBoundingClientRect().left + 'px';
			popup.style.top = element.getBoundingClientRect().top + 20 + 'px';
			popup.style.visibility = 'visible';
			element.setAttribute('aria-describedby', popup.id);
			this.current.idx = (idx + 1);
			this.current.element = element;
		},
		remove : function () {
			var popup = document.getElementById("wordspopup-" + this.current.idx);

			if (popup) {
				document.body.removeChild(popup);
				this.current.element.removeAttribute('aria-describedby');
				this.current.idx = null;
				this.current.element = null;
			}
		},
		current : {
			idx : null,
			element : null
		}
	};

	var popupEvt = (function () {
		var openIdx = null,
			focusedWord = null;

		return (function (e) {
			var element = e.target,
				term;

			if (!element.className || !element.className.match(/wordshighlight/)) { return; }

			if ((openIdx !== null) || (e.type === 'focusout')) {
				popup.remove();
				focusedElement = null;
			} else {
				term = element.firstChild.nodeValue.toLowerCase();
				for (idx = 0; idx < wordsLen; idx++) {
						if (term.match(new RegExp(words[idx][0])) && words[idx][1]) {
						// clicks give focus so use it for capturing both events
						// focus is retained by elements when scrolling clears their popup so use clicks as backup
						if (e.type === 'click') {
							if ((focusedWord === element) && (popup.current.element === null)) {
								popup.add(element, words[idx][1], idx);
							}
						} else { // focusin
							focusedWord = element;
							popup.add(element, words[idx][1], idx);
						}
					}
				}
			}

			if (event.stopPropagation) {
				event.stopPropagation();
			} else {
				event.cancelBubble = true;
			}
		});
	}());

    // From http://james.padolsey.com/javascript/find-and-replace-text-with-javascript/
    function findAndReplace(searchText, replacement, searchNode) {
        if (!searchText || typeof replacement === 'undefined') {
            // Throw error here if you want...
            return;
        }
        var regex = typeof searchText === 'string' ?
                    new RegExp(searchText, 'g') : searchText,
            childNodes = (searchNode || document.body).childNodes,
            cnLength = childNodes.length,
            excludes = 'html,head,style,title,link,meta,script,object,iframe';
        while (cnLength--) {
            var currentNode = childNodes[cnLength];
            if (currentNode.nodeType === 1 &&
                (excludes + ',').indexOf(currentNode.nodeName.toLowerCase() + ',') === -1) {
                arguments.callee(searchText, replacement, currentNode);
            }
            if (currentNode.nodeType !== 3 || !regex.test(currentNode.data) ) {
                continue;
            }
            var parent = currentNode.parentNode,
                frag = (function(){
                    var html = currentNode.data.replace(regex, replacement),
                        wrap = document.createElement('div'),
                        frag = document.createDocumentFragment();
                    wrap.innerHTML = html;
                    while (wrap.firstChild) {
                        frag.appendChild(wrap.firstChild);
                    }
                    return frag;
                })();
            parent.insertBefore(frag, currentNode);
            parent.removeChild(currentNode);
        }
    }

    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".wordshighlight { background-color: #FFFF88 !important; color: black; } .wordshasnotes { cursor: help; border-bottom:1px dashed !important; } .wordspopup { position: fixed; z-index: 1000 !important; visibility: hidden; background-color: #FFFFCC; color: black; border: solid silver 1px; margin: 5px; padding: 6px;} ";
    document.getElementsByTagName("head")[0].appendChild(css);

	for (idx = 0; idx < wordsLen; idx++) { // for each word
		words[idx][0] = words[idx][0].replace(/([.*+?^=!:${}()|[\]\/\\])/g, "\\$1");
		var pattern = '\\b' + words[idx][0];
		if (pattern.slice(-6) == '\\.\\.\\.') { // don't include end word boundary check if word ended with '...'
			pattern = pattern.slice(0, -6);
		    words[idx][0] = words[idx][0].slice(0, -6);
		} else {
        	if (pattern.slice(-1) != '.') {
            	pattern = pattern + '\\b';
        	}
        }
        var regex = new RegExp('(' + pattern + ')', 'ig');

		if (words[idx].length > 0 && words[idx][1] != undefined) {
          findAndReplace( regex, '<span class="wordshighlight wordshasnotes" tabindex="0">$1<\/span>');
        } else { // only use wordshasnotes class if the entry has associated notes
          findAndReplace( regex, '<span class="wordshighlight" tabindex="0">$1<\/span>');
        }
	}
	addEvent(document, 'focusin', popupEvt);
	addEvent(document, 'focusout', popupEvt);
	addEvent(document, 'click', popupEvt);
	addEvent(document, 'scroll', function () { popup.remove(); });
})();

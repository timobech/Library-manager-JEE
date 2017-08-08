/*! TGR app.js
 * ================
 * Main JS application file for TGR v2. This file
 * should be included in all pages. It controls some layout
 * options and implements exclusive TGR plugins.
 *
 * @Author  Almsaeed Studio
 * @Support <http://www.almsaeedstudio.com>
 * @Email   <support@almsaeedstudio.com>
 * @version 2.1.0
 * @license MIT <http://opensource.org/licenses/MIT>
 */

'use strict';

//Make sure jQuery has been loaded before app.js
if (typeof jQuery === "undefined") {
  throw new Error("TGR requires jQuery");
}

/* TGR
 *
 * @type Object
 * @description $.TGR is the main object for the template's app.
 *              It's used for implementing functions and options related
 *              to the template. Keeping everything wrapped in an object
 *              prevents conflict with other plugins and is a better
 *              way to organize our code.
 */

function number_format(number, decimals, dec_point, thousands_sep) {
  number = (number + '').replace(/[^0-9+\-Ee.]/g, '');
  var n = !isFinite(+number) ? 0 : +number,
    prec = !isFinite(+decimals) ? 0 : Math.abs(decimals),
    sep = (typeof thousands_sep === 'undefined') ? ',' : thousands_sep,
    dec = (typeof dec_point === 'undefined') ? '.' : dec_point,
    s = '',
    toFixedFix = function(n, prec) {
      var k = Math.pow(10, prec);
      return '' + (Math.round(n * k) / k).toFixed(prec);
    };
  s = (prec ? toFixedFix(n, prec) : '' + Math.round(n)).split('.');
  if (s[0].length > 3) s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep);
  if ((s[1] || '').length < prec){
    s[1] = s[1] || '';
    s[1] += new Array(prec - s[1].length + 1).join('0');
  }
  return s.join(dec);
}

function cnf(num){
  var n = number_format(num, 2, ",",".");
    return n;
}

function toFloat(num){
  try { return parseFloat(num.replace(/\.| /g,"").replace(/,/,'.')); }
    catch(e){ return Math.NaN};
}

jQuery.fn.forceNumeric = function () {

             return this.each(function () {
                 $(this).keydown(function (e) {
                     var key = e.which || e.keyCode;

                     if (!e.shiftKey && !e.altKey && !e.ctrlKey &&
                     // numbers   
                         key >= 48 && key <= 57 ||
                     // Numeric keypad
                         key >= 96 && key <= 105 ||
                     // comma, period and minus, . on keypad
                        key == 190 || key == 110|| (key == 188 && $(this).val().indexOf(",") == -1) ||
                     // Backspace and Tab and Enter
                        key == 8 || key == 9 || key == 13 ||
                     // Home and End
                        key == 35 || key == 36 ||
                     // left and right arrows
                        key == 37 || key == 39 ||
                     // Del and Ins
                        key == 46 || key == 45)
                         return true;

                     return false;
                 });
             });
         }

$.TGR = {};

/* --------------------
 * - TGR Options -
 * --------------------
 * Modify these options to suit your implementation
 */
$.TGR.options = {
  //Add slimscroll to navbar menus
  //This requires you to load the slimscroll plugin
  //in every page before app.js
  navbarMenuSlimscroll: true,
  navbarMenuSlimscrollWidth: "3px", //The width of the scroll bar
  navbarMenuHeight: "200px", //The height of the inner menu
  //Sidebar push menu toggle button selector
  sidebarToggleSelector: "[data-toggle='offcanvas']",
  //Activate sidebar push menu
  sidebarPushMenu: true,
  //Activate sidebar slimscroll if the fixed layout is set (requires SlimScroll Plugin)
  sidebarSlimScroll: true,
  //Enable sidebar expand on hover effect for sidebar mini
  //This option is forced to true if both the fixed layout and sidebar mini
  //are used together
  sidebarExpandOnHover: false,
  //BoxRefresh Plugin
  enableBoxRefresh: true,
  //Bootstrap.js tooltip
  enableBSToppltip: true,
  BSTooltipSelector: "[data-toggle='tooltip']",
  //Enable Fast Click. Fastclick.js creates a more
  //native touch experience with touch devices. If you
  //choose to enable the plugin, make sure you load the script
  //before TGR's app.js
  enableFastclick: true,
  //Control Sidebar Options
  enableControlSidebar: true,
  controlSidebarOptions: {
    //Which button should trigger the open/close event
    toggleBtnSelector: "[data-toggle='control-sidebar']",
    //The sidebar selector
    selector: ".control-sidebar",
    //Enable slide over content
    slide: true
  },
  //Box Widget Plugin. Enable this plugin
  //to allow boxes to be collapsed and/or removed
  enableBoxWidget: true,
  //Box Widget plugin options
  boxWidgetOptions: {
    boxWidgetIcons: {
      //Collapse icon
      collapse: 'fa-minus',
      //Open icon
      open: 'fa-plus',
      //Remove icon
      remove: 'fa-times'
    },
    boxWidgetSelectors: {
      //Remove button selector
      remove: '[data-widget="remove"]',
      //Collapse button selector
      collapse: '[data-widget="collapse"]'
    }
  },
  //Direct Chat plugin options
  directChat: {
    //Enable direct chat by default
    enable: true,
    //The button to open and close the chat contacts pane
    contactToggleSelector: '[data-widget="chat-pane-toggle"]'
  },
  //Define the set of colors to use globally around the website
  colors: {
    lightBlue: "#3c8dbc",
    red: "#f56954",
    green: "#00a65a",
    aqua: "#00c0ef",
    yellow: "#f39c12",
    blue: "#0073b7",
    navy: "#001F3F",
    teal: "#39CCCC",
    olive: "#3D9970",
    lime: "#01FF70",
    orange: "#FF851B",
    fuchsia: "#F012BE",
    purple: "#8E24AA",
    maroon: "#D81B60",
    black: "#222222",
    gray: "#d2d6de"
  },
  //The standard screen sizes that bootstrap uses.
  //If you change these in the variables.less file, change
  //them here too.
  screenSizes: {
    xs: 480,
    sm: 768,
    md: 992,
    lg: 1200
  }
};

/* ------------------
 * - Implementation -
 * ------------------
 * The next block of code implements TGR's
 * functions and plugins as specified by the
 * options above.
 */
$(function () {
  //Extend options if external options exist
  if (typeof TGROptions !== "undefined") {
    $.extend(true,
            $.TGR.options,
            TGROptions);
  }

  //Easy access to options
  var o = $.TGR.options;

  //Set up the object
  _init();




  
  //Activate the layout maker
  $.TGR.layout.activate();

  //Enable sidebar tree view controls
  $.TGR.tree('.sidebar');

  //Enable control sidebar
  if (o.enableControlSidebar) {
    $.TGR.controlSidebar.activate();
  }

  //Add slimscroll to navbar dropdown
  if (o.navbarMenuSlimscroll && typeof $.fn.slimscroll != 'undefined') {
    $(".navbar .menu").slimscroll({
      height: o.navbarMenuHeight,
      alwaysVisible: false,
      size: o.navbarMenuSlimscrollWidth
    }).css("width", "100%");
  }

  //Activate sidebar push menu
  if (o.sidebarPushMenu) {
    $.TGR.pushMenu.activate(o.sidebarToggleSelector);
  }

  //Activate Bootstrap tooltip
  if (o.enableBSToppltip) {
    $('body').tooltip({
      selector: o.BSTooltipSelector
    });
  }

  //Activate box widget
  if (o.enableBoxWidget) {
    $.TGR.boxWidget.activate();
  }

  //Activate fast click
  if (o.enableFastclick && typeof FastClick != 'undefined') {
    FastClick.attach(document.body);
  }

  //Activate direct chat widget
  if (o.directChat.enable) {
    $(o.directChat.contactToggleSelector).on('click', function () {
      var box = $(this).parents('.direct-chat').first();
      box.toggleClass('direct-chat-contacts-open');
    });
  }
  /*
   * INITIALIZE BUTTON TOGGLE
   * ------------------------
   */
   
  $('body').on('click', function (e) {
    $('[data-toggle="popover"]').each(function () {
        //the 'is' for buttons that trigger popups
        //the 'has' for icons within a button that triggers a popup
        if (!$(this).is(e.target) && $(this).has(e.target).length === 0 && $('.popover').has(e.target).length === 0) {
            $(this).popover('hide');
        }
    });
});
  $('.btn-group[data-toggle="btn-toggle"]').each(function () {
    var group = $(this);
    $(this).find(".btn").on('click', function (e) {
      group.find(".btn.active").removeClass("active");
      $(this).addClass("active");
      e.preventDefault();
    });

  });
});

/* ----------------------------------
 * - Initialize the TGR Object -
 * ----------------------------------
 * All TGR functions are implemented below.
 */
function _init() {

  /* Layout
   * ======
   * Fixes the layout height in case min-height fails.
   *
   * @type Object
   * @usage $.TGR.layout.activate()
   *        $.TGR.layout.fix()
   *        $.TGR.layout.fixSidebar()
   */

  /*$.TGR.typeahead = {
    init: function(){
      $("#q").typeahead({
        source: [
            { id: 1, name: 'TR Tanger' },
            { id: 2, name: 'TR Kénitra' },
            { id: 3, name: 'TR Meknes' },
            { id: 4, name: 'TR Marakech' },
            { id: 5, name: 'TR Agadir' },
            { id: 6, name: 'TP Tanger' },
            { id: 7, name: 'TP Kénitra' },
            { id: 8, name: 'TP Meknes' },
            { id: 9, name: 'TP Marakech' },
            { id: 10, name: 'TP Agadir' },
            { id: 11, name: 'P Percepteur 1' },
            { id: 12, name: 'P Percepteur 2'  },
            { id: 13, name: 'P Percepteur 3' },
            { id: 14, name: 'P Percepteur 4' },
            { id: 15, name: 'P Percepteur 5' },
        ]
    });
    }
  };*/
  $.TGR.layout = {
    activate: function () {
      var _this = this;
      _this.fix();
      _this.fixSidebar();
      $(window, ".wrapper").resize(function () {
        _this.fix();
        _this.fixSidebar();
      });
    },
    fix: function () {
      //Get window height and the wrapper height
      var neg = $('.main-header').outerHeight() + $('.main-footer').outerHeight();
      var window_height = $(window).height();
      var sidebar_height = $(".sidebar").height();
      //Set the min-height of the content and sidebar based on the
      //the height of the document.
      if ($("body").hasClass("fixed")) {
        $(".content-wrapper, .right-side").css('min-height', window_height - $('.main-footer').outerHeight());
      } else {
        var postSetWidth;
        if (window_height >= sidebar_height) {
          $(".content-wrapper, .right-side").css('min-height', window_height - neg);
          postSetWidth = window_height - neg;
        } else {
          $(".content-wrapper, .right-side").css('min-height', sidebar_height);
          postSetWidth = sidebar_height;
        }

        //Fix for the control sidebar height
        var controlSidebar = $($.TGR.options.controlSidebarOptions.selector);
        if (typeof controlSidebar !== "undefined") {
          if (controlSidebar.height() > postSetWidth)
            $(".content-wrapper, .right-side").css('min-height', controlSidebar.height());
        }

      }
    },
    fixSidebar: function () {
      //Make sure the body tag has the .fixed class
      if (!$("body").hasClass("fixed")) {
        if (typeof $.fn.slimScroll != 'undefined') {
          $(".sidebar").slimScroll({destroy: true}).height("auto");
        }
        return;
      } else if (typeof $.fn.slimScroll == 'undefined' && console) {
        console.error("Error: the fixed layout requires the slimscroll plugin!");
      }
      //Enable slimscroll for fixed layout
      if ($.TGR.options.sidebarSlimScroll) {
        if (typeof $.fn.slimScroll != 'undefined') {
          //Destroy if it exists
          $(".sidebar").slimScroll({destroy: true}).height("auto");
          //Add slimscroll
          $(".sidebar").slimscroll({
            height: ($(window).height() - $(".main-header").height()) + "px",
            color: "rgba(0,0,0,0.2)",
            size: "3px"
          });
        }
      }
    }
  };

    $.TGR.Cons = {
        selected: null,
        filt: {
            valid: null,
            rejet: null,
            ntrait: null,
            rec: null,
            nrec: null
        },
        trs: null,
        box: {
            valid: null,
            rejet: null,
            ntrait: null,
            rec: null,
            nrec: null
        },
        init: function(){
            var _this = $.TGR.Cons;
            _this.filt.valid = $("#fval");
            _this.filt.rejet = $("#frej");
            _this.filt.ntrait = $("#fnt");
            _this.filt.rec = $("#rec");
            _this.filt.nrec = $("#nrec");
            _this.trs = $(".table.table-cons tr.filtr");
            for(var e in _this.filt) if(_this.filt.hasOwnProperty(e)) {
                _this.box[e] = _this.filt[e].closest(".info-box").removeClass("selected");
                _this.filt[e].click(_this.filter[e]);
            }
        },
        filter: {
            valid: function(e){
                e.preventDefault();
                var _this =  $.TGR.Cons, tog = _this.selected != "valid";
                _this.filter.deselect();
                if(tog){
                    _this.selected = "valid";
                    _this.box[_this.selected].addClass("selected");
                    _this.trs.not("."+_this.selected).hide();
                }
            },
            rejet: function(e){
                e.preventDefault();
                var _this =  $.TGR.Cons, tog = _this.selected != "rejet";
                _this.filter.deselect();
                if(tog){
                    _this.selected = "rejet";
                    _this.box[_this.selected].addClass("selected");
                    _this.trs.not("."+_this.selected).hide();
                }
            },
            ntrait: function(e){
                e.preventDefault();
                var _this =  $.TGR.Cons, tog = _this.selected != "ntrait";
                _this.filter.deselect();
                if(tog){
                    _this.selected = "ntrait";
                    _this.box[_this.selected].addClass("selected");
                    _this.trs.not("."+_this.selected).hide();
                }
            },
            rec: function(e){
                e.preventDefault();
                var _this =  $.TGR.Cons, tog = _this.selected != "rec";
                _this.filter.deselect();
                if(tog){
                    _this.selected = "rec";
                    _this.box[_this.selected].addClass("selected");
                    _this.trs.filter(function(i, e){ var e = $(e); return !e.hasClass("ntrait") && !e.hasClass("rejet")  && !e.hasClass("valid") }).hide();
                }
            },
            nrec: function(e){
                e.preventDefault();
                var _this =  $.TGR.Cons, tog = _this.selected != "nrec";
                _this.filter.deselect();
                if(tog){
                    _this.selected = "nrec";
                    _this.box[_this.selected].addClass("selected");
                    _this.trs.filter(function(i, e){ var e = $(e); return e.hasClass("ntrait") || e.hasClass("rejet") || e.hasClass("valid") }).hide();
                }
            },
            deselect: function(){
                var _this = $.TGR.Cons;
                if(_this.selected){
                    _this.trs.show();
                    _this.box[_this.selected].removeClass("selected");
                    _this.selected = null;
                }
            }
        }
    };

  /* PushMenu()
   * ==========
   * Adds the push menu functionality to the sidebar.
   *
   * @type Function
   * @usage: $.TGR.pushMenu("[data-toggle='offcanvas']")
   */
  $.TGR.pushMenu = {
    activate: function (toggleBtn) {
      //Get the screen sizes
      var screenSizes = $.TGR.options.screenSizes;

      //Enable sidebar toggle
      $(toggleBtn).on('click', function (e) {
        e.preventDefault();

        //Enable sidebar push menu
        if ($(window).width() > (screenSizes.sm - 1)) {
          $("body").toggleClass('sidebar-collapse');
        }
        //Handle sidebar push menu for small screens
        else {
          if ($("body").hasClass('sidebar-open')) {
            $("body").removeClass('sidebar-open');
            $("body").removeClass('sidebar-collapse')
          } else {
            $("body").addClass('sidebar-open');
          }
        }
      });

      $(".content-wrapper").click(function () {
        //Enable hide menu when clicking on the content-wrapper on small screens
        if ($(window).width() <= (screenSizes.sm - 1) && $("body").hasClass("sidebar-open")) {
          $("body").removeClass('sidebar-open');
        }
      });

      //Enable expand on hover for sidebar mini
      if ($.TGR.options.sidebarExpandOnHover
              || ($('body').hasClass('fixed')
                      && $('body').hasClass('sidebar-mini'))) {
        this.expandOnHover();
      }

    },
    expandOnHover: function () {
      var _this = this;
      var screenWidth = $.TGR.options.screenSizes.sm - 1;
      //Expand sidebar on hover
      $('.main-sidebar').hover(function () {
        if ($('body').hasClass('sidebar-mini')
                && $("body").hasClass('sidebar-collapse')
                && $(window).width() > screenWidth) {
          _this.expand();
        }
      }, function () {
        if ($('body').hasClass('sidebar-mini')
                && $('body').hasClass('sidebar-expanded-on-hover')
                && $(window).width() > screenWidth) {
          _this.collapse();
        }
      });
    },
    expand: function () {
      $("body").removeClass('sidebar-collapse').addClass('sidebar-expanded-on-hover');
    },
    collapse: function () {
      if ($('body').hasClass('sidebar-expanded-on-hover')) {
        $('body').removeClass('sidebar-expanded-on-hover').addClass('sidebar-collapse');
      }
    }
  };


$.validator.addMethod("lower", function(value, element, params) {
  var hi = typeof params == "string" ? 
           toFloat($(params).val()) :
           params;
  if (isNaN(hi))
    return true;
  else
    return toFloat(value) < hi;
}); 

$.validator.addMethod("higher", function(value, element, params) {
  var hi = typeof params == "string" ? 
           toFloat($(params).val()) :
           params;
  if (isNaN(hi))
    return true;
  else
    return toFloat(value) > hi;
}); 


  /* Tree()
   * ======
   * Converts the sidebar into a multilevel
   * tree view menu.
   *
   * @type Function
   * @Usage: $.TGR.tree('.sidebar')
   */
  $.TGR.tree = function (menu) {
    var _this = this;

    $("li a", $(menu)).on('click', function (e) {
      //Get the clicked link and the next element
      var $this = $(this);
      var checkElement = $this.next();

      //Check if the next element is a menu and is visible
      if ((checkElement.is('.treeview-menu')) && (checkElement.is(':visible'))) {
        //Close the menu
        checkElement.slideUp('normal', function () {
          checkElement.removeClass('menu-open');
          //Fix the layout in case the sidebar stretches over the height of the window
          //_this.layout.fix();
        });
        checkElement.parent("li").removeClass("active");
      }
      //If the menu is not visible
      else if ((checkElement.is('.treeview-menu')) && (!checkElement.is(':visible'))) {
        //Get the parent menu
        var parent = $this.parents('ul').first();
        //Close all open menus within the parent
        var ul = parent.find('ul:visible').slideUp('normal');
        //Remove the menu-open class from the parent
        ul.removeClass('menu-open');
        //Get the parent li
        var parent_li = $this.parent("li");

        //Open the target menu and add the menu-open class
        checkElement.slideDown('normal', function () {
          //Add the class active to the parent li
          checkElement.addClass('menu-open');
          parent.find('li.active').removeClass('active');
          parent_li.addClass('active');
          //Fix the layout in case the sidebar stretches over the height of the window
          _this.layout.fix();
        });
      }
      //if this isn't a link, prevent the page from being redirected
      if (checkElement.is('.treeview-menu')) {
        e.preventDefault();
      }
    });
  };

  $.TGR.Saisie = {
      prop: null,
      rmsg: null,
      rejmod: null,
    args: null, // ol
    inargs: null, // input arg
    spanargs:  [],
    form: null,
    addnew: null,
    input: null,
    vider: null,
    valider: null,
    rejeter: null,
    enreg: null,
    po: null,
    motif: null,
    modmotif: null,
    modal: null,
    modtitle : null,
    modcontent: null,
    modbut: null,
    ctitle: null,
    btitle: null,
    editable:true,
    init: function(){
      var _this = $.TGR.Saisie;
      _this.modal = $("#modal");
        _this.rmsg = $("#rmsg");
      _this.modmotif = $("#modmotif");
      _this.motif = $("#motif");
      _this.args = $("#args");
      _this.rejmod = $("#rejmod");
      _this.inargs = $("#a1");
      _this.input = $("td.tdinp input[type=text][id^='r']");
      _this.vider = $("#vider");
      _this.enreg = $("#enreg");
      _this.soum = $("#soum");
      _this.valider = $("#valid");
      _this.rejeter = $("#rejeter");
      _this.valider.click(_this.valid);
      _this.rejeter.click(_this.reject);
      _this.enreg.click(_this.save);
      _this.vider.click(_this.clean);
      _this.soum.click(_this.submit);

      _this.modal.modal({ show : false });
        _this.modmotif.modal({show:false}).on("hide.bs.modal",function(){ _this.rmsg.html("Veuillez indiquer la cause du rejet :"); _this.motif.removeAttr("disabled"); _this.rejeter.removeClass("disabled"); });
      _this.modtitle = _this.modal.find(".modal-text");
      _this.modcontent = _this.modal.find(".modal-body");
      _this.modbut = _this.modal.find("#modbut");
      _this.ctitle = $("#ctitle");
      _this.btitle = $("#btitle");
      _this.addnew = function(val, foc){
        var arg = _this.inargs.val() || val, span;
        if(arg){
          span = $("<span/>", { "class":"inparg", text: arg});
          $("<li/>").append($("<a/>", { href: "#", 'class': 'indel', 
            click: function(e){ e.preventDefault(); if(_this.editable) $(this).parent().remove(); }, html: "<i class='fa fa-times'></i>"}))
            .append(span)
            .appendTo(_this.args);
          _this.inargs.val("");
          if(!foc) _this.inargs[0].focus();
          _this.spanargs.push(span);
        }
      }
      for(var i = 0; i < _this.input.length; i++){
        $(_this.input[i])
          /*.keydown(function(e){
          var allowed = ["0","1","2","3","4","5","6","7","8","9",".",","," "]; 
            if(allowed.indexOf(e.which) == -1 || ($(this).val().indexOf(".") != -1 && e.which == ".")) e.preventDefault();
          })*/
          .forceNumeric()
          /*.keyup(function(e){
            var el = $(this), sn = toFloat(el.val());
            if(!isNaN(sn) && ( e.which != 188) ) el.val(cnf(sn).replace(/,0[0]*$/,""));
          })*/.blur(function(e){
                var el = $(this), sn = toFloat(el.val());
                if(!isNaN(sn) && ( e.which != 188) ) el.val(cnf(sn));
            })
      }
      for(var i = 3; i < 20; i += 4){
        $(_this.input[i])
          .keydown(function(e){ e.preventDefault(); })
      }

      $.TGR.Saisie.calcAll();
      $("#addarg").click(_this.addnew)
      _this.inargs.keydown(function(e){ if(e.which == 13) _this.addnew() });
      _this.po = $('body').popover({title: "Calcul de taux", content: function(){ 
        var t = $(this), i = t.attr('id');
    var e = "<form action='#' onsubmit='$.TGR.Saisie.calc(\""+i+"\"); return false'>\
    <div id='msg_"+i+"'></div>\
  <div class='form-group'><input id='rec_"+i+"' type='text' class='form-input' value='"+t.attr('data-rec')+"' placeholder='Recouvrements réalisés'></div>\
  <div class='form-group'><input id='pec_"+i+"' type='text' class='form-input' value='"+t.attr('data-pec')+"' placeholder='Prises en charge'></div>\
  <div class='form-group'><input id='sus_"+i+"' type='text' class='form-input' value='"+t.attr('data-sus')+"' placeholder='Suspensions légales'></div>\
  <div class='form-group'><button class='btn btn-primary' onclick='$.TGR.Saisie.calc(\""+i+"\")'>Calculer</button></div></form>";
    return e;
   }, selector: ".taux", html:true, placement:"left", container:"body"});
      _this.form = $("#sp");
      _this.form.validate({
        showErrors: function(errorMap, errorList) {
          // Clean up any tooltips for valid elements

          $.each(this.validElements(), function (index, element) {
              var $element = $(element);
              $element.data("title", "") // Clear the title - there is no error associated anymore
                  .removeClass("error")
                  .tooltip("destroy");
          });
          // Create new tooltips for invalid elements
          $.each(errorList, function (index, error) {
              var $element = $(error.element);
              $element.tooltip("destroy") // Destroy any pre-existing tooltip so we can repopulate with new tooltip content
                  .data("title", error.message)
                  .addClass("error")
                  .tooltip(); // Create a new tooltip based on the error messsage we just set in the title
          });
      },
        onfocusout: function(element) {
          var $el = $(element), valid, id = $el.attr("id"), row = parseInt(id[1]), col = parseInt(id[2]);
          if(col == 3) return;
          valid  = $el.valid();
          switch(row){
            case 0: case 1: case 2: $.TGR.Saisie.sum([0,1,2],col,3); $.TGR.Saisie.sum([3,6], col, 7); break;
            case 4: case 5: $.TGR.Saisie.sum([4,5],col,6); $.TGR.Saisie.sum([3,6], col, 7);break;
          }
        },
        rules: {
          r00: { required:true, higher: "#r01"},
		  r10: { required:true, higher: "#r11"},
          r20: { required:true, higher: "#r21" },
          r30: { required:true, higher: "#r31" },
          r40: { required:true, higher: "#r41"},
          r50: { required:true, higher: "#r51" },
          r01: { required:true, higher: "#r02", lower: "#r00" },
          r02: { required:true, lower: "#r01"},
          r11: { required:true, higher: "#r12", lower: "#r10" },
          r12: { required:true, lower: "#r11"},
          r21: { required:true, higher: "#r22", lower: "#r20" },
          r22: { required:true, lower: "#r21"},
          r41: { required:true, higher: "#r42", lower: "#r40" },
          r42: { required:true, lower: "#r41"},
          r51: { required:true, higher: "#r52", lower: "#r50" },
          r52: { required:true, lower: "#r51"},
          r03: { required: true },
          r13: { required: true },
          r23: { required: true },
          r43: { required: true },
          r53: { required: true }
        },
        messages: {
          r00: {
            required: "Ce champs est requis",
            higher: "Les rappels doivent être supérieurs aux réductions des restes"
          },
          r10: {
            required: "Ce champs est requis",
            higher: "Les rappels doivent être supérieurs aux réductions des restes"
          },
          r20: {
            required: "Ce champs est requis",
            higher: "Les rappels doivent être supérieurs aux réductions des restes"
          },
          r40: {
            required: "Ce champs est requis",
            higher: "Les rappels doivent être supérieurs aux réductions des restes"
          },
          r50: {
            required: "Ce champs est requis",
            higher: "Les rappels doivent être supérieurs aux réductions des restes"
          },
          r01: {
            required: "Ce champs est requis",
            higher: "Les recettes doivent être inférieurs aux réductions des restes",
            lower: "Les rappels doivent être supérieurs aux réductions des restes"
          },
          r02: {
            required: "Ce champs est requis",
            lower: "Les recettes doivent être inférieurs aux réductions des restes"
          },
          r11: {
            required: "Ce champs est requis",
            higher: "Les recettes doivent être inférieurs aux réductions des restes",
            lower: "Les rappels doivent être supérieurs aux réductions des restes"
          },
          r12: {
            required: "Ce champs est requis",
            lower: "Les recettes doivent être inférieurs aux réductions des restes"
          },
          r21: {
            required: "Ce champs est requis",
            higher: "Les recettes doivent être inférieurs aux réductions des restes",
            lower: "Les rappels doivent être supérieurs aux réductions des restes"
          },
          r22: {
            required: "Ce champs est requis",
            lower: "Les recettes doivent être inférieurs aux réductions des restes"
          },
          r41: {
            required: "Ce champs est requis",
            higher: "Les recettes doivent être inférieurs aux réductions des restes",
            lower: "Les rappels doivent être supérieurs aux réductions des restes"
          },
          r42: {
            required: "Ce champs est requis",
            lower: "Les recettes doivent être inférieurs aux réductions des restes"
          },
          r51: {
            required: "Ce champs est requis",
            higher: "Les recettes doivent être inférieurs aux réductions des restes",
            lower: "Les rappels doivent être supérieurs aux réductions des restes"
          },
          r52: {
            required: "Ce champs est requis",
            lower: "Les recettes doivent être inférieurs aux réductions des restes"
          }
        }

      });
    },
    save: function(){
      var _this = $.TGR.Saisie, data = _this.getData();
      _this.getData();
      _this.disable();
      _this.modcontent.html("<i class='fa fa-spinner'></i> Enregistrement en cours...");
      _this.modbut.hide();
      _this.modtitle.text("Enregistrement");
      _this.modal.modal("show");
      _this.modbut.hide();
      $.post("../controller/saisieajax.php?act=save", data, function(e){
        if(e.suc)
        _this.modcontent.html("<i class='fa fa-check'></i> Enregistré aves succès");
        else
        _this.modcontent.html("<i class='fa fa-times'></i> Erreur lors l'enregistrement des modifications");
        _this.enable();
      }, "json");
    },
    getData:function(){
      var _this = $.TGR.Saisie, data = {}, el, i, j;
      for(i = 0; i < 6; i++){
        if(i == 3) continue;
        for(j = 0; j < 3;j++)
          data["r"+i+j] = toFloat($("#r"+i+j).val()) || null;
        el = $("#r"+i+"3");
        data["r"+i+"4"] = toFloat(el.attr("data-rec")) || null;
        data["r"+i+"5"] = toFloat(el.attr("data-pec")) || null;
        data["r"+i+"6"] = toFloat(el.attr("data-sus")) || null;
      }
      for(i = 2; i <= 6; i++)
        data["a"+i] = $("#a"+i).val() || null;
      data["leviers"] = _this.getargs();
        data["id"] = $.TGR.Saisie.prop;
      if(!data["leviers"].length) data["leviers"] = null;
      return data;
    },
    submit: function(){
      var data, i, j, el, _this = $.TGR.Saisie;
      if(!_this.form.valid()) return false;
      data = _this.getData();
      _this.disable();
      _this.modcontent.html("<i class='fa fa-spinner'></i> Soumission en cours...");
      _this.modbut.hide();
      _this.modtitle.text("Soumission");
      _this.modal.modal("show");
      _this.modbut.hide();
      $.post("../controller/saisieajax.php?act=submit", data, function(e){
        if(e.suc){
          _this.modcontent.html("<i class='fa fa-check'></i> Soumis aves succès");
          _this.soum.addClass("hidden");
          _this.enreg.addClass("hidden");
          _this.vider.addClass("hidden");
          _this.btitle.html("Proposition soumise :");
          _this.ctitle.html("Vous ne pouvez plus modifier votre proposition.")
        }
        else {
          _this.modcontent.html("<i class='fa fa-times'></i> Erreur lors la soumission de votre proposition");
          _this.enable();
        }
        
      }, "json");

    },
      valid: function(){
          var data, i, j, el, _this = $.TGR.Saisie;
          _this.modtitle.text("Validation");
          _this.modcontent.html("<i class='fa fa-spinner'></i> Validation en cours...");
          _this.modal.modal("show");
          _this.modbut.hide();
          $.post("../controller/saisieajax.php?act=valid", {id:_this.prop}, function(e){
              if(e.suc){
                  _this.modcontent.html("<i class='fa fa-check'></i> Validé aves succès");
                  _this.valider.addClass("hidden");
                  _this.rejmod.addClass("hidden");
                  _this.btitle.html("Proposition validée.");
                  _this.ctitle.html("")
              }
              else {
                  _this.modcontent.html("<i class='fa fa-times'></i> Erreur lors la validation de la proposition");
                  _this.enable();
              }

          }, "json");
      },
      reject: function(){
          var data, i, j, el, _this = $.TGR.Saisie;
          _this.rejeter.addClass("disabled");
          _this.rmsg.html("<i class='fa fa-spinner'></i> Soumission du rejet en cours...")
          $.post("../controller/saisieajax.php?act=rejet", {id:_this.prop, motif:_this.motif.val()}, function(e){
              if(e.suc){
                  _this.rmsg.html("<i class='fa fa-check'></i> Soumis aves succès");
                  _this.valider.addClass("hidden");
                  _this.rejmod.addClass("hidden");
                  _this.btitle.html("Proposition rejetée.");
                  _this.ctitle.html("");
                  _this.modmotif.modal("hide");
              }
              else {
                  _this.rmsg.html("<i class='fa fa-times'></i> Erreur lors le rejet de la proposition");
                  _this.rejeter.removeClass("disabled");
                  _this.motif.removeAttr("disabled");
              }

          }, "json");
      },
    sum:function(rows, col, ans){
      var res = 0, i, el, v;
      for(i = 0; i < rows.length; i++){
        v = toFloat($("#r"+rows[i]+col).val());
        if(isNaN(v) || v < 0) return false;
        res += v;
      }
      $("#r"+ans+col).val(cnf(res));
    },
    sum_taux:function(rows, ans){
      var res = 0, i, el, rec = 0, pec = 0 , sus = 0, v;
      for(i = 0; i < rows.length; i++){
        el = $("#r"+rows[i]+3);
        v = toFloat(el.attr("data-rec"));
        if(isNaN(v) || v < 0) return false;
        rec += v;
        v = toFloat(el.attr("data-pec"));
        if(isNaN(v) || v < 0) return false;
        pec += v;
        v = toFloat(el.attr("data-sus"));
        if(isNaN(v) || v < 0) return false;
        sus += v;
      }
      res = rec * 100 / (pec - sus);
      el = $("#r"+ans+3);
      el.val(cnf(res));
      el.attr("data-rec", rec);
      el.attr("data-pec", pec);
      el.attr("data-sus", sus);
    },
    getargs: function(){
      var all = [];
      $.TGR.Saisie.args.find("span.inparg").each(function(i, e){ all.push($(e).text()) } );
      return all;
    },
    calc: function(id){
      var el = $("#"+id), rec = $("#rec_"+id), pec = $("#pec_"+id), sus = $("#sus_"+id), recv = toFloat(rec.val()), pecv = toFloat(pec.val()), susv = toFloat(sus.val()), pct;
      pct = (recv / (pecv - susv)) * 100;
      if(isNaN(recv) || isNaN(pecv) || isNaN(susv) || !(pct >= 0 && pct <= 100)){
        el.addClass("error");
        $("#msg_"+id).html("<div class='alert alert-danger alert-dismissible' role='alert'>\
  <button type='button' class='close' data-dismiss='alert' aria-label='Close'><span aria-hidden='true'>&times;</span></button>\
  <strong>Erreur de calcul :</strong> Les recouvrements doivent être inférieurs aux prises en charges hormis les suspensions.\
</div>")
      }
      else{
        el.removeClass("error");
        $("#msg_"+id).html("");
        el.attr('data-rec', recv);
        el.attr('data-pec', pecv);
        el.attr('data-sus', susv);
        el.val(cnf(pct));
        $.TGR.Saisie.sum_taux([0,1,2], 3);
        $.TGR.Saisie.sum_taux([4,5], 6);
        $.TGR.Saisie.sum_taux([3,6], 7);
      }
    },
    calcAll: function(){
      $.TGR.Saisie.sum([0,1,2],0, 3);
      $.TGR.Saisie.sum([4,5],0, 6);
      $.TGR.Saisie.sum([3,6],0, 7);
      $.TGR.Saisie.sum([0,1,2],1, 3);
      $.TGR.Saisie.sum([4,5],1, 6);
      $.TGR.Saisie.sum([3,6],1, 7);
      $.TGR.Saisie.sum([0,1,2],2, 3);
      $.TGR.Saisie.sum([4,5],2, 6);
      $.TGR.Saisie.sum([3,6],2, 7);
      $.TGR.Saisie.sum_taux([0,1,2], 3);
      $.TGR.Saisie.sum_taux([4,5], 6);
      $.TGR.Saisie.sum_taux([3,6], 7);
    },
    disable: function(){
      var inp = [0,1,2,4,5], _this = $.TGR.Saisie, i, j;
      for(i = 0; i < inp.length; i++){
        for(j = 0; j < 4; j++) 
          $(_this.input[inp[i]*4+j]).removeClass("error").attr("disabled", "");
      }
      $("#inarg").hide();
      for(var i = 2; i <= 6; i++)
        $("#a"+i).removeClass("error").attr("disabled", "");
      _this.editable = false;
        _this.args.addClass("disabled");
    },
    enable: function(){
      var inp = [0,1,2,4,5], _this = $.TGR.Saisie, i, j;
      for(i = 0; i < inp.length; i++){
        for(j = 0; j < 4; j++) 
          $(_this.input[inp[i]*4+j]).removeAttr("disabled");
      }
      $("#inarg").show();
      for(var i = 2; i <= 6; i++)
        $("#a"+i).removeAttr("disabled");
      _this.editable = true;
        _this.args.removeClass("disabled");
    },
    clean: function(){
      var i, _this = $.TGR.Saisie, el;
      for(i = 0; i < _this.input.length;i++)
        $(_this.input[i]).removeClass("error").val("");
      for(i = 0; i < 8; i++){
        el = $("#r"+i+"3");
        el.attr('data-rec', "");
        el.attr('data-pec', "");
        el.attr('data-sus', "");
      }
      for(i = 1; i <= 6;i++)
          $("#a"+i).removeClass("error").val("");
      _this.args.html("");
    }
  };
  /* ControlSidebar
   * ==============
   * Adds functionality to the right sidebar
   *
   * @type Object
   * @usage $.TGR.controlSidebar.activate(options)
   */
  $.TGR.controlSidebar = {
    //instantiate the object
    activate: function () {
      //Get the object
      var _this = this;
      //Update options
      var o = $.TGR.options.controlSidebarOptions;
      //Get the sidebar
      var sidebar = $(o.selector);
      //The toggle button
      var btn = $(o.toggleBtnSelector);

      //Listen to the click event
      btn.on('click', function (e) {
        e.preventDefault();
        //If the sidebar is not open
        if (!sidebar.hasClass('control-sidebar-open')
                && !$('body').hasClass('control-sidebar-open')) {
          //Open the sidebar
          _this.open(sidebar, o.slide);
        } else {
          _this.close(sidebar, o.slide);
        }
      });

      //If the body has a boxed layout, fix the sidebar bg position
      var bg = $(".control-sidebar-bg");
      _this._fix(bg);

      //If the body has a fixed layout, make the control sidebar fixed      
      if ($('body').hasClass('fixed')) {
        _this._fixForFixed(sidebar);
      } else {
        //If the content height is less than the sidebar's height, force max height
        if ($('.content-wrapper, .right-side').height() < sidebar.height()) {
          _this._fixForContent(sidebar);
        }
      }
    },
    //Open the control sidebar
    open: function (sidebar, slide) {
      var _this = this;
      //Slide over content
      if (slide) {
        sidebar.addClass('control-sidebar-open');
      } else {
        //Push the content by adding the open class to the body instead 
        //of the sidebar itself
        $('body').addClass('control-sidebar-open');
      }
    },
    //Close the control sidebar
    close: function (sidebar, slide) {
      if (slide) {
        sidebar.removeClass('control-sidebar-open');
      } else {
        $('body').removeClass('control-sidebar-open');
      }
    },
    _fix: function (sidebar) {
      var _this = this;
      if ($("body").hasClass('layout-boxed')) {
        sidebar.css('position', 'absolute');
        sidebar.height($(".wrapper").height());
        $(window).resize(function () {
          _this._fix(sidebar);
        });
      } else {
        sidebar.css({
          'position': 'fixed',
          'height': 'auto'
        });
      }
    },
    _fixForFixed: function (sidebar) {
      sidebar.css({
        'position': 'fixed',
        'max-height': '100%',
        'overflow': 'auto',
        'padding-bottom': '50px'
      });
    },
    _fixForContent: function (sidebar) {
      $(".content-wrapper, .right-side").css('min-height', sidebar.height());
    }
  };

  /* BoxWidget
   * =========
   * BoxWidget is a plugin to handle collapsing and
   * removing boxes from the screen.
   *
   * @type Object
   * @usage $.TGR.boxWidget.activate()
   *        Set all your options in the main $.TGR.options object
   */
  $.TGR.boxWidget = {
    selectors: $.TGR.options.boxWidgetOptions.boxWidgetSelectors,
    icons: $.TGR.options.boxWidgetOptions.boxWidgetIcons,
    activate: function () {
      var _this = this;
      //Listen for collapse event triggers
      $(_this.selectors.collapse).on('click', function (e) {
        e.preventDefault();
        _this.collapse($(this));
      });

      //Listen for remove event triggers
      $(_this.selectors.remove).on('click', function (e) {
        e.preventDefault();
        _this.remove($(this));
      });
    },
    collapse: function (element) {
      var _this = this;
      //Find the box parent
      var box = element.parents(".box").first();
      //Find the body and the footer
      var box_content = box.find("> .box-body, > .box-footer");
      if (!box.hasClass("collapsed-box")) {
        //Convert minus into plus
        element.children(":first")
                .removeClass(_this.icons.collapse)
                .addClass(_this.icons.open);
        //Hide the content
        box_content.slideUp(300, function () {
          box.addClass("collapsed-box");
        });
      } else {
        //Convert plus into minus
        element.children(":first")
                .removeClass(_this.icons.open)
                .addClass(_this.icons.collapse);
        //Show the content
        box_content.slideDown(300, function () {
          box.removeClass("collapsed-box");
        });
      }
    },
    remove: function (element) {
      //Find the box parent
      var box = element.parents(".box").first();
      box.slideUp();
    }
  };
}

/* ------------------
 * - Custom Plugins -
 * ------------------
 * All custom plugins are defined below.
 */

/*
 * BOX REFRESH BUTTON
 * ------------------
 * This is a custom plugin to use with the component BOX. It allows you to add
 * a refresh button to the box. It converts the box's state to a loading state.
 *
 * @type plugin
 * @usage $("#box-widget").boxRefresh( options );
 */
(function ($) {

  $.fn.boxRefresh = function (options) {

    // Render options
    var settings = $.extend({
      //Refresh button selector
      trigger: ".refresh-btn",
      //File source to be loaded (e.g: ajax/src.php)
      source: "",
      //Callbacks
      onLoadStart: function (box) {
      }, //Right after the button has been clicked
      onLoadDone: function (box) {
      } //When the source has been loaded

    }, options);

    //The overlay
    var overlay = $('<div class="overlay"><div class="fa fa-refresh fa-spin"></div></div>');

    return this.each(function () {
      //if a source is specified
      if (settings.source === "") {
        if (console) {
          console.log("Please specify a source first - boxRefresh()");
        }
        return;
      }
      //the box
      var box = $(this);
      //the button
      var rBtn = box.find(settings.trigger).first();

      //On trigger click
      rBtn.on('click', function (e) {
        e.preventDefault();
        //Add loading overlay
        start(box);

        //Perform ajax call
        box.find(".box-body").load(settings.source, function () {
          done(box);
        });
      });
    });

    function start(box) {
      //Add overlay and loading img
      box.append(overlay);

      settings.onLoadStart.call(box);
    }

    function done(box) {
      //Remove overlay and loading img
      box.find(overlay).remove();

      settings.onLoadDone.call(box);
    }

  };



})(jQuery);

/*
 * TODO LIST CUSTOM PLUGIN
 * -----------------------
 * This plugin depends on iCheck plugin for checkbox and radio inputs
 *
 * @type plugin
 * @usage $("#todo-widget").todolist( options );
 */
(function ($) {

  $.fn.todolist = function (options) {
    // Render options
    var settings = $.extend({
      //When the user checks the input
      onCheck: function (ele) {
      },
      //When the user unchecks the input
      onUncheck: function (ele) {
      }
    }, options);

    return this.each(function () {

      if (typeof $.fn.iCheck != 'undefined') {
        $('input', this).on('ifChecked', function (event) {
          var ele = $(this).parents("li").first();
          ele.toggleClass("done");
          settings.onCheck.call(ele);
        });

        $('input', this).on('ifUnchecked', function (event) {
          var ele = $(this).parents("li").first();
          ele.toggleClass("done");
          settings.onUncheck.call(ele);
        });
      } else {
        $('input', this).on('change', function (event) {
          var ele = $(this).parents("li").first();
          ele.toggleClass("done");
          settings.onCheck.call(ele);
        });
      }
    });
  };
}(jQuery));

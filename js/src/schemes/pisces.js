$(document).ready(function(){function t(){var t=$(".header-inner").height()+CONFIG.sidebar.offset,e=function(){var t=$(".footer-inner"),e=t.outerHeight(!0)-t.outerHeight();return t.outerHeight(!0)+e}();t+($("#sidebar").height()+NexT.utils.getSidebarb2tHeight())<$("#content").height()&&i.affix({offset:{top:t-CONFIG.sidebar.offset,bottom:e}}),function(t){return $("#sidebar").css({"margin-top":t})}(t).css({"margin-left":"initial"})}function e(){window.matchMedia("(min-width: 991px)").addListener(function(e){e.matches&&($(window).off(".affix"),i.removeData("bs.affix").removeClass("affix affix-top affix-bottom"),t())})}var i=$(".sidebar-inner");t(),e()});
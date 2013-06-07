
var PageName = 'Home';
var PageId = 'fa3ecd7168ea465f96a3978bb20d814f'
var PageUrl = 'Home.html'
document.title = 'Home';
var PageNotes = 
{
"pageName":"Home",
"showNotesNames":"False"}
var $OnLoadVariable = '';

var $CSUM;

var hasQuery = false;
var query = window.location.hash.substring(1);
if (query.length > 0) hasQuery = true;
var vars = query.split("&");
for (var i = 0; i < vars.length; i++) {
    var pair = vars[i].split("=");
    if (pair[0].length > 0) eval("$" + pair[0] + " = decodeURIComponent(pair[1]);");
} 

if (hasQuery && $CSUM != 1) {
alert('Prototype Warning: The variable values were too long to pass to this page.\nIf you are using IE, using Firefox will support more data.');
}

function GetQuerystring() {
    return '#OnLoadVariable=' + encodeURIComponent($OnLoadVariable) + '&CSUM=1';
}

function PopulateVariables(value) {
    var d = new Date();
  value = value.replace(/\[\[OnLoadVariable\]\]/g, $OnLoadVariable);
  value = value.replace(/\[\[PageName\]\]/g, PageName);
  value = value.replace(/\[\[GenDay\]\]/g, '28');
  value = value.replace(/\[\[GenMonth\]\]/g, '4');
  value = value.replace(/\[\[GenMonthName\]\]/g, 'abril');
  value = value.replace(/\[\[GenDayOfWeek\]\]/g, 'domingo');
  value = value.replace(/\[\[GenYear\]\]/g, '2013');
  value = value.replace(/\[\[Day\]\]/g, d.getDate());
  value = value.replace(/\[\[Month\]\]/g, d.getMonth() + 1);
  value = value.replace(/\[\[MonthName\]\]/g, GetMonthString(d.getMonth()));
  value = value.replace(/\[\[DayOfWeek\]\]/g, GetDayString(d.getDay()));
  value = value.replace(/\[\[Year\]\]/g, d.getFullYear());
  return value;
}

function OnLoad(e) {

}

var u31 = document.getElementById('u31');
gv_vAlignTable['u31'] = 'center';
var u36 = document.getElementById('u36');
gv_vAlignTable['u36'] = 'top';
var u16 = document.getElementById('u16');
gv_vAlignTable['u16'] = 'center';
var u17 = document.getElementById('u17');

u17.style.cursor = 'pointer';
if (bIE) u17.attachEvent("onclick", Clicku17);
else u17.addEventListener("click", Clicku17, true);
function Clicku17(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u11', 'pd1u11','none','',500,'none','',500);

}

}

if (bIE) u17.attachEvent("onmouseover", MouseOveru17);
else u17.addEventListener("mouseover", MouseOveru17, true);
function MouseOveru17(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u17',e)) return;
if (true) {

	SetPanelState('u11', 'pd1u11','none','',500,'none','',500);

}

}

var u28 = document.getElementById('u28');
gv_vAlignTable['u28'] = 'center';
var u29 = document.getElementById('u29');

u29.style.cursor = 'pointer';
if (bIE) u29.attachEvent("onclick", Clicku29);
else u29.addEventListener("click", Clicku29, true);
function Clicku29(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u26', 'pd0u26','none','',500,'none','',500);

}

}

if (bIE) u29.attachEvent("onmouseout", MouseOutu29);
else u29.addEventListener("mouseout", MouseOutu29, true);
function MouseOutu29(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u29',e)) return;
if (true) {

	SetPanelState('u26', 'pd0u26','none','',500,'none','',500);

}

}

var u8 = document.getElementById('u8');

var u30 = document.getElementById('u30');

var u21 = document.getElementById('u21');

var u6 = document.getElementById('u6');
gv_vAlignTable['u6'] = 'center';
var u32 = document.getElementById('u32');

u32.style.cursor = 'pointer';
if (bIE) u32.attachEvent("onclick", Clicku32);
else u32.addEventListener("click", Clicku32, true);
function Clicku32(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u26', 'pd2u26','none','',500,'none','',500);

}

}

if (bIE) u32.attachEvent("onmouseout", MouseOutu32);
else u32.addEventListener("mouseout", MouseOutu32, true);
function MouseOutu32(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u32',e)) return;
if (true) {

	SetPanelState('u26', 'pd0u26','none','',500,'none','',500);

}

}

var u15 = document.getElementById('u15');

var u13 = document.getElementById('u13');
gv_vAlignTable['u13'] = 'center';
var u14 = document.getElementById('u14');

if (bIE) u14.attachEvent("onmouseout", MouseOutu14);
else u14.addEventListener("mouseout", MouseOutu14, true);
function MouseOutu14(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u14',e)) return;
if (true) {

	SetPanelState('u11', 'pd0u11','none','',500,'none','',500);

}

}

var u4 = document.getElementById('u4');

var u1 = document.getElementById('u1');
gv_vAlignTable['u1'] = 'center';
var u26 = document.getElementById('u26');

var u10 = document.getElementById('u10');

u10.style.cursor = 'pointer';
if (bIE) u10.attachEvent("onclick", Clicku10);
else u10.addEventListener("click", Clicku10, true);
function Clicku10(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u4', 'pd1u4','none','',500,'none','',500);

}

}

if (bIE) u10.attachEvent("onmouseover", MouseOveru10);
else u10.addEventListener("mouseover", MouseOveru10, true);
function MouseOveru10(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u10',e)) return;
if (true) {

	SetPanelState('u4', 'pd1u4','none','',500,'none','',500);

}

}

var u11 = document.getElementById('u11');

var u3 = document.getElementById('u3');
gv_vAlignTable['u3'] = 'center';
var u12 = document.getElementById('u12');

var u9 = document.getElementById('u9');
gv_vAlignTable['u9'] = 'center';
var u35 = document.getElementById('u35');

u35.style.cursor = 'pointer';
if (bIE) u35.attachEvent("onclick", Clicku35);
else u35.addEventListener("click", Clicku35, true);
function Clicku35(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u26', 'pd2u26','none','',500,'none','',500);

}

}

if (bIE) u35.attachEvent("onmouseover", MouseOveru35);
else u35.addEventListener("mouseover", MouseOveru35, true);
function MouseOveru35(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u35',e)) return;
if (true) {

	SetPanelState('u26', 'pd1u26','none','',500,'none','',500);

}

}

var u27 = document.getElementById('u27');

var u7 = document.getElementById('u7');

if (bIE) u7.attachEvent("onmouseout", MouseOutu7);
else u7.addEventListener("mouseout", MouseOutu7, true);
function MouseOutu7(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u7',e)) return;
if (true) {

	SetPanelState('u4', 'pd0u4','none','',500,'none','',500);

}

}

var u23 = document.getElementById('u23');
gv_vAlignTable['u23'] = 'top';
var u24 = document.getElementById('u24');

var u25 = document.getElementById('u25');
gv_vAlignTable['u25'] = 'center';
var u2 = document.getElementById('u2');

var u18 = document.getElementById('u18');
gv_vAlignTable['u18'] = 'top';
var u19 = document.getElementById('u19');
gv_vAlignTable['u19'] = 'top';
var u20 = document.getElementById('u20');

u20.style.cursor = 'pointer';
if (bIE) u20.attachEvent("onclick", Clicku20);
else u20.addEventListener("click", Clicku20, true);
function Clicku20(e)
{
windowEvent = e;


if (true) {

	self.location.href="activity_carroCompras.html" + GetQuerystring();

}

}

var u5 = document.getElementById('u5');

var u22 = document.getElementById('u22');
gv_vAlignTable['u22'] = 'center';
var u33 = document.getElementById('u33');

var u34 = document.getElementById('u34');
gv_vAlignTable['u34'] = 'center';
var u0 = document.getElementById('u0');

if (window.OnLoad) OnLoad();

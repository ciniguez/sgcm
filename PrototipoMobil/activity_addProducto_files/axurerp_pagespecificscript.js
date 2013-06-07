
var PageName = 'activity_addProducto';
var PageId = 'b4e1e611e3ad4098872e195f23af4c82'
var PageUrl = 'activity_addProducto.html'
document.title = 'activity_addProducto';
var PageNotes = 
{
"pageName":"activity_addProducto",
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

var u36 = document.getElementById('u36');
gv_vAlignTable['u36'] = 'center';
var u16 = document.getElementById('u16');
gv_vAlignTable['u16'] = 'center';
var u17 = document.getElementById('u17');

var u28 = document.getElementById('u28');

u28.style.cursor = 'pointer';
if (bIE) u28.attachEvent("onclick", Clicku28);
else u28.addEventListener("click", Clicku28, true);
function Clicku28(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u19', 'pd2u19','none','',500,'none','',500);

}

}

if (bIE) u28.attachEvent("onmouseover", MouseOveru28);
else u28.addEventListener("mouseover", MouseOveru28, true);
function MouseOveru28(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u28',e)) return;
if (true) {

	SetPanelState('u19', 'pd1u19','none','',500,'none','',500);

}

}

var u29 = document.getElementById('u29');

var u8 = document.getElementById('u8');
gv_vAlignTable['u8'] = 'center';
var u30 = document.getElementById('u30');
gv_vAlignTable['u30'] = 'center';
var u21 = document.getElementById('u21');
gv_vAlignTable['u21'] = 'center';
var u6 = document.getElementById('u6');
gv_vAlignTable['u6'] = 'center';
var u32 = document.getElementById('u32');
gv_vAlignTable['u32'] = 'center';
var u13 = document.getElementById('u13');

var u14 = document.getElementById('u14');
gv_vAlignTable['u14'] = 'center';
var u15 = document.getElementById('u15');

var u38 = document.getElementById('u38');

var u40 = document.getElementById('u40');

var u1 = document.getElementById('u1');
gv_vAlignTable['u1'] = 'center';
var u26 = document.getElementById('u26');

var u41 = document.getElementById('u41');
gv_vAlignTable['u41'] = 'center';
var u10 = document.getElementById('u10');
gv_vAlignTable['u10'] = 'center';
var u11 = document.getElementById('u11');

var u3 = document.getElementById('u3');
gv_vAlignTable['u3'] = 'center';
var u27 = document.getElementById('u27');
gv_vAlignTable['u27'] = 'center';
var u39 = document.getElementById('u39');
gv_vAlignTable['u39'] = 'center';
var u9 = document.getElementById('u9');

var u35 = document.getElementById('u35');

var u7 = document.getElementById('u7');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u7ann'), "<div id='u7Note' class='annnoteimage' style='left:" + x + ";top:" + y + "'></div>");
$('#u7Note').click(function(e) { ToggleWorkflow(e, 'u7', 300, 150, false); return false; });
var u7Ann = 
{
"label":"btnGuardar",
"Description":"Registra el producto y su cantidad solicitada en el Carro de Compras. Debe validar que la cantidad solicitada sea disponible en stock."};

u7.style.cursor = 'pointer';
if (bIE) u7.attachEvent("onclick", Clicku7);
else u7.addEventListener("click", Clicku7, true);
function Clicku7(e)
{
windowEvent = e;


if (true) {

	self.location.href="activity_carroCompras.html" + GetQuerystring();

}

}

var u42 = document.getElementById('u42');
gv_vAlignTable['u42'] = 'top';
var u12 = document.getElementById('u12');
gv_vAlignTable['u12'] = 'center';
var u23 = document.getElementById('u23');

var u24 = document.getElementById('u24');
gv_vAlignTable['u24'] = 'center';
var u4 = document.getElementById('u4');

var u5 = document.getElementById('u5');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u5ann'), "<div id='u5Note' class='annnoteimage' style='left:" + x + ";top:" + y + "'></div>");
$('#u5Note').click(function(e) { ToggleWorkflow(e, 'u5', 300, 150, false); return false; });
var u5Ann = 
{
"label":"btnCancelar",
"Description":"Regresar al Carro de Compras actual, sin registrar ninguna modificación."};

u5.style.cursor = 'pointer';
if (bIE) u5.attachEvent("onclick", Clicku5);
else u5.addEventListener("click", Clicku5, true);
function Clicku5(e)
{
windowEvent = e;


if (true) {

	self.location.href="activity_carroCompras.html" + GetQuerystring();

}

}

var u2 = document.getElementById('u2');

var u18 = document.getElementById('u18');
gv_vAlignTable['u18'] = 'center';
var u19 = document.getElementById('u19');

var u20 = document.getElementById('u20');

var u37 = document.getElementById('u37');

var u22 = document.getElementById('u22');

u22.style.cursor = 'pointer';
if (bIE) u22.attachEvent("onclick", Clicku22);
else u22.addEventListener("click", Clicku22, true);
function Clicku22(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u19', 'pd0u19','none','',500,'none','',500);

}

}

if (bIE) u22.attachEvent("onmouseout", MouseOutu22);
else u22.addEventListener("mouseout", MouseOutu22, true);
function MouseOutu22(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u22',e)) return;
if (true) {

	SetPanelState('u19', 'pd0u19','none','',500,'none','',500);

}

}

var u25 = document.getElementById('u25');

u25.style.cursor = 'pointer';
if (bIE) u25.attachEvent("onclick", Clicku25);
else u25.addEventListener("click", Clicku25, true);
function Clicku25(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u19', 'pd2u19','none','',500,'none','',500);

}

}

if (bIE) u25.attachEvent("onmouseout", MouseOutu25);
else u25.addEventListener("mouseout", MouseOutu25, true);
function MouseOutu25(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u25',e)) return;
if (true) {

	SetPanelState('u19', 'pd0u19','none','',500,'none','',500);

}

}

var u33 = document.getElementById('u33');

var u34 = document.getElementById('u34');
gv_vAlignTable['u34'] = 'center';
var u0 = document.getElementById('u0');

if (window.OnLoad) OnLoad();

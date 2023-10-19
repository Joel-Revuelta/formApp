"use strict";(self.webpackChunkformApp=self.webpackChunkformApp||[]).push([[270],{7270:(U,u,s)=>{s.r(u),s.d(u,{ReactiveModule:()=>F});var a=s(6814),o=s(95),p=s(72),e=s(4946),l=s(9735);function d(t,m){if(1&t&&(e.TgZ(0,"span",11),e._uU(1),e.qZA()),2&t){const r=e.oxw();e.xp6(1),e.hij(" ",r.getFieldError("name")," ")}}function g(t,m){1&t&&(e.TgZ(0,"span",11),e._uU(1," El precio debe de ser 0 o mayor "),e.qZA())}function Z(t,m){1&t&&(e.TgZ(0,"span",11),e._uU(1," Las existencias deben de ser 0 o mayor "),e.qZA())}function h(t,m){if(1&t&&(e.TgZ(0,"span",14),e._uU(1),e.qZA()),2&t){const r=e.oxw();e.xp6(1),e.hij(" ",r.getFieldError("name")," ")}}function v(t,m){1&t&&(e.TgZ(0,"span",14),e._uU(1," Este campo es requerido "),e.qZA())}function _(t,m){if(1&t){const r=e.EpF();e.TgZ(0,"div",15)(1,"div",6),e._UZ(2,"input",16),e.TgZ(3,"button",17),e.NdJ("click",function(){const c=e.CHM(r).index,b=e.oxw();return e.KtG(b.onDeleteFavorite(c))}),e._uU(4," Eliminar "),e.qZA()(),e.YNc(5,v,2,0,"span",5),e.qZA()}if(2&t){const r=m.index,n=e.oxw();e.xp6(2),e.Q6J("formControlName",r),e.xp6(3),e.Q6J("ngIf",!n.isValidFieldInArray(n.favoriteGames,r))}}function T(t,m){1&t&&(e.TgZ(0,"span",18),e._uU(1," Debe de aceptar las condiciones de uso "),e.qZA())}const q=[{path:"",children:[{path:"basic",component:(()=>{class t{constructor(r,n){this.fb=r,this.validatorsService=n,this.myForm=this.fb.group({name:["",[o.kI.required,o.kI.minLength(3)]],price:[0,[o.kI.required,o.kI.min(0)]],inStorage:[0,[o.kI.required,o.kI.min(0)]]})}isValidField(r){return this.validatorsService.isValidField(this.myForm,r)}getFieldError(r){if(!this.myForm.controls[r])return null;const n=this.myForm.controls[r].errors||{};for(const i of Object.keys(n))switch(i){case"required":return"Este campo es requerido";case"minlength":return`M\xednimo ${n.minlength.requiredLength} caracteres`}return null}onSave(){this.myForm.invalid?this.myForm.markAllAsTouched():(console.log(this.myForm.value),this.myForm.reset({price:0,inStorage:0}))}static#e=this.\u0275fac=function(n){return new(n||t)(e.Y36(o.qu),e.Y36(l.S))};static#o=this.\u0275cmp=e.Xpm({type:t,selectors:[["ng-component"]],decls:70,vars:28,consts:[[1,"row"],[1,"col"],["autocomplete","off",3,"formGroup","ngSubmit"],[1,"mb-3","row"],[1,"col-sm-3","col-form-label"],[1,"col-sm-9"],["type","text","formControlName","name","placeholder","Nombre del producto",1,"form-control"],["class","form-text text-danger",4,"ngIf"],["type","number","formControlName","price","placeholder","Precio del producto",1,"form-control"],["type","number","formControlName","inStorage","placeholder","Existencias del producto",1,"form-control"],["type","submit",1,"btn","btn-primary","float-end"],[1,"form-text","text-danger"]],template:function(n,i){1&n&&(e.TgZ(0,"h2"),e._uU(1,"Reactivos: B\xe1sicos"),e.qZA(),e._UZ(2,"hr"),e.TgZ(3,"div",0)(4,"div",1)(5,"form",2),e.NdJ("ngSubmit",function(){return i.onSave()}),e.TgZ(6,"div",3)(7,"label",4),e._uU(8,"Producto"),e.qZA(),e.TgZ(9,"div",5),e._UZ(10,"input",6),e.YNc(11,d,2,1,"span",7),e.qZA()(),e.TgZ(12,"div",3)(13,"label",4),e._uU(14,"Precio"),e.qZA(),e.TgZ(15,"div",5),e._UZ(16,"input",8),e.YNc(17,g,2,0,"span",7),e.qZA()(),e.TgZ(18,"div",3)(19,"label",4),e._uU(20,"Existencias"),e.qZA(),e.TgZ(21,"div",5),e._UZ(22,"input",9),e.YNc(23,Z,2,0,"span",7),e.qZA()(),e.TgZ(24,"div",0)(25,"div",1)(26,"button",10),e._uU(27," Guardar "),e.qZA()()()()()(),e.TgZ(28,"div",0)(29,"div",1)(30,"span"),e._uU(31,"Valid"),e.qZA(),e.TgZ(32,"pre"),e._uU(33),e.ALo(34,"json"),e.qZA(),e.TgZ(35,"span"),e._uU(36,"Pristine"),e.qZA(),e.TgZ(37,"pre"),e._uU(38),e.ALo(39,"json"),e.qZA(),e.TgZ(40,"span"),e._uU(41,"Touched"),e.qZA(),e.TgZ(42,"pre"),e._uU(43),e.ALo(44,"json"),e.qZA(),e.TgZ(45,"span"),e._uU(46,"Value"),e.qZA(),e.TgZ(47,"pre"),e._uU(48),e.ALo(49,"json"),e.qZA(),e.TgZ(50,"span"),e._uU(51,"Precio"),e.qZA(),e.TgZ(52,"pre"),e._uU(53),e.ALo(54,"json"),e.qZA(),e.TgZ(55,"span"),e._uU(56,"Precio - Errors"),e.qZA(),e.TgZ(57,"pre"),e._uU(58),e.ALo(59,"json"),e.qZA(),e.TgZ(60,"span"),e._uU(61,"Producto"),e.qZA(),e.TgZ(62,"pre"),e._uU(63),e.ALo(64,"json"),e.qZA(),e.TgZ(65,"span"),e._uU(66,"Producto - Errors"),e.qZA(),e.TgZ(67,"pre"),e._uU(68),e.ALo(69,"json"),e.qZA()()()),2&n&&(e.xp6(5),e.Q6J("formGroup",i.myForm),e.xp6(6),e.Q6J("ngIf",!i.isValidField("name")),e.xp6(6),e.Q6J("ngIf",!i.isValidField("price")),e.xp6(6),e.Q6J("ngIf",!i.isValidField("inStorage")),e.xp6(10),e.Oqu(e.lcZ(34,12,i.myForm.valid)),e.xp6(5),e.Oqu(e.lcZ(39,14,i.myForm.pristine)),e.xp6(5),e.Oqu(e.lcZ(44,16,i.myForm.touched)),e.xp6(5),e.Oqu(e.lcZ(49,18,i.myForm.value)),e.xp6(5),e.Oqu(e.lcZ(54,20,i.myForm.controls.price.value)),e.xp6(5),e.Oqu(e.lcZ(59,22,i.myForm.controls.price.errors)),e.xp6(5),e.Oqu(e.lcZ(64,24,i.myForm.controls.name.value)),e.xp6(5),e.Oqu(e.lcZ(69,26,i.myForm.controls.name.errors)))},dependencies:[a.O5,o._Y,o.Fj,o.wV,o.JJ,o.JL,o.sg,o.u,a.Ts],encapsulation:2})}return t})()},{path:"dynamic",component:(()=>{class t{constructor(r,n){this.fb=r,this.validatorsService=n,this.myForm=this.fb.group({name:["",[o.kI.required,o.kI.minLength(3)]],favoriteGames:this.fb.array([["Metal Gear",o.kI.required],["Death Stranding",o.kI.required]])}),this.newFavorite=new o.NI("",o.kI.required)}get favoriteGames(){return this.myForm.get("favoriteGames")}isValidField(r){return this.validatorsService.isValidField(this.myForm,r)}isValidFieldInArray(r,n){return!(r.controls[n].errors&&r.controls[n].touched)}getFieldError(r){if(!this.myForm.controls[r])return null;const n=this.myForm.controls[r].errors||{};for(const i of Object.keys(n))switch(i){case"required":return"Este campo es requerido";case"minlength":return`M\xednimo ${n.minlength.requiredLength} caracteres`}return null}onAddToFavorites(){this.newFavorite.invalid||(this.favoriteGames.push(this.fb.control(this.newFavorite.value,o.kI.required)),this.newFavorite.reset())}onDeleteFavorite(r){this.favoriteGames.removeAt(r)}onSubmit(){this.myForm.invalid?this.myForm.markAllAsTouched():(console.log(this.myForm.value),this.myForm.controls.favoriteGames=this.fb.array([]),this.myForm.reset())}static#e=this.\u0275fac=function(n){return new(n||t)(e.Y36(o.qu),e.Y36(l.S))};static#o=this.\u0275cmp=e.Xpm({type:t,selectors:[["ng-component"]],decls:49,vars:16,consts:[["autocomplete","off",3,"formGroup","ngSubmit"],[1,"mb-3","row"],[1,"col-sm-3","col-form-label"],[1,"col-sm-9"],["formControlName","name","placeholder","Nombre de la persona",1,"form-control"],["class","form-text text-danger",4,"ngIf"],[1,"input-group"],["placeholder","Agregar favorito",1,"form-control",3,"formControl"],["type","button",1,"btn","btn-outline-primary",3,"click"],["formArrayName","favoriteGames",1,"col-sm-9"],["class","mb-1",4,"ngFor","ngForOf"],[1,"row"],[1,"col-sm-12"],["type","submit",1,"btn","btn-primary","float-end"],[1,"form-text","text-danger"],[1,"mb-1"],[1,"form-control",3,"formControlName"],["type","button",1,"btn","btn-outline-danger",3,"click"]],template:function(n,i){1&n&&(e.TgZ(0,"h2"),e._uU(1,"Reactivos: "),e.TgZ(2,"small"),e._uU(3," Din\xe1micos "),e.qZA()(),e._UZ(4,"hr"),e.TgZ(5,"form",0),e.NdJ("ngSubmit",function(){return i.onSubmit()}),e.TgZ(6,"div",1)(7,"label",2),e._uU(8,"Nombre"),e.qZA(),e.TgZ(9,"div",3),e._UZ(10,"input",4),e.YNc(11,h,2,1,"span",5),e.qZA()(),e.TgZ(12,"div",1)(13,"label",2),e._uU(14,"Agregar"),e.qZA(),e.TgZ(15,"div",3)(16,"div",6),e._UZ(17,"input",7),e.TgZ(18,"button",8),e.NdJ("click",function(){return i.onAddToFavorites()}),e._uU(19," Agregar favorito "),e.qZA()()()(),e.TgZ(20,"div",1)(21,"label",2),e._uU(22,"Favoritos"),e.qZA(),e.TgZ(23,"div",9),e.YNc(24,_,6,2,"div",10),e.qZA()(),e.TgZ(25,"div",11)(26,"div",12)(27,"button",13),e._uU(28," Guardar "),e.qZA()()()(),e.TgZ(29,"span"),e._uU(30,"Valid"),e.qZA(),e.TgZ(31,"pre"),e._uU(32),e.ALo(33,"json"),e.qZA(),e._UZ(34,"br"),e.TgZ(35,"span"),e._uU(36,"Value"),e.qZA(),e.TgZ(37,"pre"),e._uU(38),e.ALo(39,"json"),e.qZA(),e._UZ(40,"br"),e.TgZ(41,"span"),e._uU(42,"Agregar Juego"),e.qZA(),e.TgZ(43,"pre"),e._uU(44),e.ALo(45,"json"),e.qZA(),e.TgZ(46,"pre"),e._uU(47),e.ALo(48,"json"),e.qZA()),2&n&&(e.xp6(5),e.Q6J("formGroup",i.myForm),e.xp6(6),e.Q6J("ngIf",!i.isValidField("name")),e.xp6(6),e.Q6J("formControl",i.newFavorite),e.xp6(7),e.Q6J("ngForOf",i.favoriteGames.controls),e.xp6(8),e.Oqu(e.lcZ(33,8,i.myForm.valid)),e.xp6(6),e.Oqu(e.lcZ(39,10,i.myForm.value)),e.xp6(6),e.Oqu(e.lcZ(45,12,i.newFavorite.valid)),e.xp6(3),e.Oqu(e.lcZ(48,14,i.newFavorite.value)))},dependencies:[a.sg,a.O5,o._Y,o.Fj,o.JJ,o.JL,o.oH,o.sg,o.u,o.CE,a.Ts],encapsulation:2})}return t})()},{path:"switches",component:(()=>{class t{constructor(r,n){this.fb=r,this.validatorsService=n,this.myForm=this.fb.group({gender:["M",o.kI.required],wantNotifications:[!0,o.kI.required],termsAndConditions:[!1,o.kI.requiredTrue]}),this.person={gender:"F",wantNotifications:!1}}isValidField(r){return this.validatorsService.isValidField(this.myForm,r)}onSave(){if(this.myForm.invalid)return void this.myForm.markAllAsTouched();const{termsAndConditions:r,...n}=this.myForm.value;this.person=n,console.log(this.myForm.value),console.log(this.person),this.myForm.reset({gender:"M",wantNotifications:!0,termsAndConditions:!1})}static#e=this.\u0275fac=function(n){return new(n||t)(e.Y36(o.qu),e.Y36(l.S))};static#o=this.\u0275cmp=e.Xpm({type:t,selectors:[["ng-component"]],decls:53,vars:11,consts:[["autocomplete","off",3,"formGroup","ngSubmit"],[1,"row","mb-3"],[1,"col-sm-3","col-form-label"],[1,"col-sm-9"],[1,"form-check"],["type","radio","value","M","formControlName","gender","id","radioMasculino",1,"form-check-input"],["for","radioMasculino",1,"form-check-label"],["type","radio","value","F","formControlName","gender","id","radioFemenino",1,"form-check-input"],["for","radioFemenino",1,"form-check-label"],[1,"form-check","form-switch","mt-2"],["type","checkbox","formControlName","wantNotifications","id","flexSwitchCheckChecked",1,"form-check-input"],["for","flexSwitchCheckChecked",1,"form-check-label"],["type","checkbox","formControlName","termsAndConditions","id","flexCheckDefault",1,"form-check-input"],["for","flexCheckDefault",1,"form-check-label"],["class","form-text text-danger",4,"ngIf"],[1,"row"],[1,"col"],["type","submit",1,"btn","btn-primary","float-end"],[1,"form-text","text-danger"]],template:function(n,i){1&n&&(e.TgZ(0,"h2"),e._uU(1,"Reactivos: Switches"),e.qZA(),e._UZ(2,"hr"),e.TgZ(3,"form",0),e.NdJ("ngSubmit",function(){return i.onSave()}),e.TgZ(4,"div",1)(5,"label",2),e._uU(6,"G\xe9nero"),e.qZA(),e.TgZ(7,"div",3)(8,"div",4),e._UZ(9,"input",5),e.TgZ(10,"label",6),e._uU(11," Masculino "),e.qZA()(),e.TgZ(12,"div",4),e._UZ(13,"input",7),e.TgZ(14,"label",8),e._uU(15," Femenino "),e.qZA()()()(),e.TgZ(16,"div",1)(17,"label",2),e._uU(18,"Notificaciones"),e.qZA(),e.TgZ(19,"div",3)(20,"div",9),e._UZ(21,"input",10),e.TgZ(22,"label",11),e._uU(23,"Quiero recibir notificaciones"),e.qZA()()()(),e.TgZ(24,"div",1),e._UZ(25,"label",2),e.TgZ(26,"div",3)(27,"div",4),e._UZ(28,"input",12),e.TgZ(29,"label",13),e._uU(30," T\xe9rminos y condiciones de uso "),e.qZA()(),e.YNc(31,T,2,0,"span",14),e.qZA()(),e.TgZ(32,"div",15)(33,"div",16)(34,"button",17),e._uU(35," Guardar "),e.qZA()()()(),e.TgZ(36,"h5"),e._uU(37,"Valor del formulario"),e.qZA(),e.TgZ(38,"pre"),e._uU(39),e.ALo(40,"json"),e.qZA(),e._UZ(41,"br"),e.TgZ(42,"h5"),e._uU(43,"Persona"),e.qZA(),e.TgZ(44,"pre"),e._uU(45),e.ALo(46,"json"),e.qZA(),e._UZ(47,"br"),e.TgZ(48,"h5"),e._uU(49,"Valid"),e.qZA(),e.TgZ(50,"pre"),e._uU(51),e.ALo(52,"json"),e.qZA()),2&n&&(e.xp6(3),e.Q6J("formGroup",i.myForm),e.xp6(28),e.Q6J("ngIf",!i.isValidField("termsAndConditions")),e.xp6(8),e.Oqu(e.lcZ(40,5,i.myForm.value)),e.xp6(6),e.Oqu(e.lcZ(46,7,"object")),e.xp6(6),e.Oqu(e.lcZ(52,9,i.myForm.valid)))},dependencies:[a.O5,o._Y,o.Fj,o.Wl,o._,o.JJ,o.JL,o.sg,o.u,a.Ts],encapsulation:2})}return t})()},{path:"**",redirectTo:"basic"}]}];let y=(()=>{class t{static#e=this.\u0275fac=function(n){return new(n||t)};static#o=this.\u0275mod=e.oAB({type:t});static#r=this.\u0275inj=e.cJS({imports:[p.Bz.forChild(q),p.Bz]})}return t})(),F=(()=>{class t{static#e=this.\u0275fac=function(n){return new(n||t)};static#o=this.\u0275mod=e.oAB({type:t});static#r=this.\u0275inj=e.cJS({imports:[a.ez,y,o.UX]})}return t})()}}]);
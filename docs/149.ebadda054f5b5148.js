"use strict";(self.webpackChunkformApp=self.webpackChunkformApp||[]).push([[149],{8149:(U,u,n)=>{n.r(u),n.d(u,{AuthModule:()=>F});var m=n(6814),t=n(95),p=n(72),e=n(4946),d=n(9735),c=n(5592);let Z=(()=>{class o{validate(s){const a=s.value;return new c.y(i=>{"joel.revuel@gmail.com"===a&&(i.next({emailTaken:!0}),i.complete()),i.next(null),i.complete()})}static#e=this.\u0275fac=function(a){return new(a||o)};static#o=this.\u0275prov=e.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"})}return o})();function g(o,l){1&o&&(e.TgZ(0,"span",13),e._uU(1," Debe de ser en formato de nombre y apellido "),e.qZA())}function f(o,l){1&o&&(e.TgZ(0,"span",13),e._uU(1," mensaje de error del email "),e.qZA())}function h(o,l){1&o&&(e.TgZ(0,"span",13),e._uU(1," El username no puede ser Strider "),e.qZA())}function A(o,l){1&o&&(e.TgZ(0,"span",13),e._uU(1," La contrase\xf1a debe de ser mayor de 6 caracteres. "),e.qZA())}function v(o,l){1&o&&(e.TgZ(0,"span",13),e._uU(1," Las contrase\xf1as deben de ser iguales "),e.qZA())}const T=[{path:"",children:[{path:"sign-up",component:(()=>{class o{constructor(s,a,r){this.fb=s,this.validatorsService=a,this.emailValidator=r,this.myForm=this.fb.group({name:["",[t.kI.required,t.kI.pattern(this.validatorsService.firstNameAndLastnamePattern)]],email:["",[t.kI.required,t.kI.pattern(this.validatorsService.emailPattern)],[this.emailValidator]],username:["",[t.kI.required,this.validatorsService.cantBeStrider]],password:["",[t.kI.required,t.kI.minLength(6)]],password2:["",[t.kI.required]]},{validators:[this.validatorsService.isFieldOneEqualFieldTwo("password","password2")]})}isValidField(s){return this.validatorsService.isValidField(this.myForm,s)}onSubmit(){this.myForm.markAllAsTouched(),console.log(this.myForm.value)}static#e=this.\u0275fac=function(a){return new(a||o)(e.Y36(t.qu),e.Y36(d.S),e.Y36(Z))};static#o=this.\u0275cmp=e.Xpm({type:o,selectors:[["ng-component"]],decls:76,vars:27,consts:[[1,"row"],[1,"col"],["autocomplete","off",3,"formGroup","ngSubmit"],[1,"row","mb-3"],[1,"col-sm-3","col-form-label"],[1,"col-sm-9"],["type","text","formControlName","name","placeholder","Nombre del usuario",1,"form-control"],["class","form-text text-danger",4,"ngIf"],["type","email","formControlName","email","placeholder","Email del usuario",1,"form-control"],["type","text","formControlName","username","placeholder","Nombre c\xf3digo del usuario",1,"form-control"],["type","password","formControlName","password","placeholder","Password de su cuenta",1,"form-control"],["type","password","formControlName","password2","placeholder","Confirmar la contrase\xf1a",1,"form-control"],["type","submit",1,"btn","btn-primary","float-end"],[1,"form-text","text-danger"]],template:function(a,r){1&a&&(e.TgZ(0,"h2"),e._uU(1,"Validaciones Reactivas"),e.qZA(),e._UZ(2,"hr"),e.TgZ(3,"div",0)(4,"div",1)(5,"form",2),e.NdJ("ngSubmit",function(){return r.onSubmit()}),e.TgZ(6,"div",3)(7,"label",4),e._uU(8,"Nombre"),e.qZA(),e.TgZ(9,"div",5),e._UZ(10,"input",6),e.YNc(11,g,2,0,"span",7),e.qZA()(),e.TgZ(12,"div",3)(13,"label",4),e._uU(14,"Email"),e.qZA(),e.TgZ(15,"div",5),e._UZ(16,"input",8),e.YNc(17,f,2,0,"span",7),e.qZA()(),e.TgZ(18,"div",3)(19,"label",4),e._uU(20,"Username"),e.qZA(),e.TgZ(21,"div",5),e._UZ(22,"input",9),e.YNc(23,h,2,0,"span",7),e.qZA()(),e.TgZ(24,"div",3)(25,"label",4),e._uU(26,"Password"),e.qZA(),e.TgZ(27,"div",5),e._UZ(28,"input",10),e.YNc(29,A,2,0,"span",7),e.qZA()(),e.TgZ(30,"div",3)(31,"label",4),e._uU(32,"Confirmar"),e.qZA(),e.TgZ(33,"div",5),e._UZ(34,"input",11),e.YNc(35,v,2,0,"span",7),e.qZA()(),e.TgZ(36,"div",0)(37,"div",1)(38,"button",12),e._uU(39," Crear "),e.qZA()()()()()(),e.TgZ(40,"h2"),e._uU(41),e.qZA(),e.TgZ(42,"h2"),e._uU(43),e.qZA(),e.TgZ(44,"h2"),e._uU(45),e.qZA(),e.TgZ(46,"h2"),e._uU(47,"Form errors"),e.qZA(),e.TgZ(48,"pre"),e._uU(49),e.ALo(50,"json"),e.qZA(),e.TgZ(51,"h5"),e._uU(52,"Nombre"),e.qZA(),e.TgZ(53,"pre"),e._uU(54),e.ALo(55,"json"),e.qZA(),e.TgZ(56,"h5"),e._uU(57,"Email"),e.qZA(),e.TgZ(58,"pre"),e._uU(59),e.ALo(60,"json"),e.qZA(),e.TgZ(61,"h5"),e._uU(62,"Username"),e.qZA(),e.TgZ(63,"pre"),e._uU(64),e.ALo(65,"json"),e.qZA(),e.TgZ(66,"h5"),e._uU(67,"Password"),e.qZA(),e.TgZ(68,"pre"),e._uU(69),e.ALo(70,"json"),e.qZA(),e.TgZ(71,"h5"),e._uU(72,"Confirmar"),e.qZA(),e.TgZ(73,"pre"),e._uU(74),e.ALo(75,"json"),e.qZA()),2&a&&(e.xp6(5),e.Q6J("formGroup",r.myForm),e.xp6(6),e.Q6J("ngIf",!r.isValidField("name")),e.xp6(6),e.Q6J("ngIf",!r.isValidField("email")),e.xp6(6),e.Q6J("ngIf",!r.isValidField("username")),e.xp6(6),e.Q6J("ngIf",!r.isValidField("password")),e.xp6(6),e.Q6J("ngIf",!r.isValidField("password2")),e.xp6(6),e.hij("Form Valid: ",r.myForm.valid,""),e.xp6(2),e.hij("Form Status: ",r.myForm.status," "),e.xp6(2),e.hij("Form Pending: ",r.myForm.pending," "),e.xp6(4),e.Oqu(e.lcZ(50,15,r.myForm.errors)),e.xp6(5),e.Oqu(e.lcZ(55,17,r.myForm.controls.name.errors)),e.xp6(5),e.Oqu(e.lcZ(60,19,r.myForm.controls.email.errors)),e.xp6(5),e.Oqu(e.lcZ(65,21,r.myForm.controls.username.errors)),e.xp6(5),e.Oqu(e.lcZ(70,23,r.myForm.controls.password.errors)),e.xp6(5),e.Oqu(e.lcZ(75,25,r.myForm.controls.password2.errors)))},dependencies:[m.O5,t._Y,t.Fj,t.JJ,t.JL,t.sg,t.u,m.Ts],encapsulation:2})}return o})()},{path:"**",redirectTo:"sign-up"}]}];let q=(()=>{class o{static#e=this.\u0275fac=function(a){return new(a||o)};static#o=this.\u0275mod=e.oAB({type:o});static#r=this.\u0275inj=e.cJS({imports:[p.Bz.forChild(T),p.Bz]})}return o})(),F=(()=>{class o{static#e=this.\u0275fac=function(a){return new(a||o)};static#o=this.\u0275mod=e.oAB({type:o});static#r=this.\u0275inj=e.cJS({imports:[m.ez,q,t.UX]})}return o})()}}]);
var _$AI=require("./sailib");
var proto=function () {
  this.__tobelocked=[];
  this.__tobefrozen=[];
  this.__contracts=[];
  this.__unverified=true;
  this.isof={};
};
var prototype=new proto();
var __loadinfo=decodeURI("/Users/seanmpuckett/Documents/ProjSync/Node/sai/test/Test.sai");
prototype.isa='Test';
prototype.isof['Test']={version:'0.0.0-unspecified',isa:'Test',load:__loadinfo};
prototype.__tobelocked=prototype.__tobelocked.concat(["'Instantiate'","isa"]);
prototype.__tobefrozen=prototype.__tobefrozen.concat(["isof"]);
var t={pass:[],fail:[],ids:{}};
for (var i in t) { prototype[i]="instance"; };
var Constructor=prototype.Constructor || function(){};
prototype.Constructor=function() {
  Constructor.call(this);
  for (var i in t) this[i]=t[i];
};

var $16=prototype['Instantiate'];
prototype['Instantiate']=function(p) {
var $14,$suite,$tests,$=this;
console.log('Test coverage is really minimal right now. So is the documentation.');
$tests=['Literals','Syntax','Inheritance','Generators','Comps','RValues','Operators','Precedence','Constructs','Functions','SetStatement','Loops','Reference'];
var $6=$tests;
if (undefined===$6) $6=[]; var $2=$6.length; if ($2) { var $5,$4=0; for (;$4<$2;$4++) { $5=$6[$4];
$suite=_$AI.new($5,[$]);
$suite.Execute();

} } 
if (($14=($.fail.length))) {
console.log('FAILED');
var $13=$.fail;
if (undefined===$13) $13=[]; var $9=$13.length; if ($9) { var $12,$11=0; for (;$11<$9;$11++) { $12=$13[$11];
console.log('FAIL: '+$12);

} } 
process.exit(1);

}
else {console.log('SUCCESS');
process.exit(0);
}
};

var fn=function (){ 
    Object.defineProperty(prototype,"isa",{enumerable: false, value:prototype.isa});
    for (var i in prototype.__tobelocked)
      Object.defineProperty(prototype,prototype.__tobelocked[i],{configurable:false});
    delete prototype.__tobelocked;
    for (var i in prototype.__tobefrozen) 
      _$AI.deepFreeze(prototype[prototype.__tobefrozen[i]]);
    delete prototype.__tobefrozen;
    if (prototype.__unverified) {
      for (var i in prototype.__contracts) {
        var l=prototype.__contracts[i];
        if (undefined===prototype[l]) {
          throw new Error("SAI: Contractually required trait '"+l+"' does not exist in object '"+prototype.isa+"'.");
        } 
      }
      delete prototype.__unverified;
      delete prototype.__contracts;
    }

    prototype.constructor=function() {
      var obj=Object.create(prototype);
      obj.Constructor();
      if (obj.Instantiate) obj.Instantiate.apply(obj,arguments);
      return obj;
    };
  }();
exports=module.exports=prototype.constructor;

import{au as h,C as p,_ as e,a as d,aw as g,b as u,d as l,f as m,ax as w,h as f,G as y,i as W,k as C,ay as v,m as T,A as b}from"./index.deeadf4a.js";class s extends h{constructor(t,r,n){let a=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},i=arguments.length>4?arguments[4]:void 0,o=arguments.length>5?arguments[5]:void 0,c=arguments.length>6&&arguments[6]!==void 0?arguments[6]:new p(t,r,i,a);super(c,n,o),e(this,"abi",void 0),e(this,"metadata",void 0),e(this,"roles",void 0),e(this,"encoder",void 0),e(this,"estimator",void 0),e(this,"history",void 0),e(this,"events",void 0),e(this,"platformFees",void 0),e(this,"sales",void 0),e(this,"signature",void 0),e(this,"interceptor",void 0),this.abi=i,this.metadata=new d(this.contractWrapper,g,this.storage),this.roles=new u(this.contractWrapper,s.contractRoles),this.sales=new l(this.contractWrapper),this.events=new m(this.contractWrapper),this.history=new w(this.contractWrapper,this.events),this.encoder=new f(this.contractWrapper),this.estimator=new y(this.contractWrapper),this.platformFees=new W(this.contractWrapper),this.interceptor=new C(this.contractWrapper),this.signature=new v(this.contractWrapper,this.roles)}async getVoteBalance(){return await this.getVoteBalanceOf(await this.contractWrapper.getSignerAddress())}async getVoteBalanceOf(t){return await this.erc20.getValue(await this.contractWrapper.readContract.getVotes(t))}async getDelegation(){return await this.getDelegationOf(await this.contractWrapper.getSignerAddress())}async getDelegationOf(t){return await this.contractWrapper.readContract.delegates(t)}async isTransferRestricted(){return!await this.contractWrapper.readContract.hasRole(T("transfer"),b)}async mint(t){return this.erc20.mint(t)}async mintTo(t,r){return this.erc20.mintTo(t,r)}async getMintTransaction(t,r){return this.erc20.getMintTransaction(t,r)}async mintBatchTo(t){return this.erc20.mintBatchTo(t)}async delegateTo(t){return{receipt:await this.contractWrapper.sendTransaction("delegate",[t])}}async burn(t){return this.erc20.burn(t)}async burnFrom(t,r){return this.erc20.burnFrom(t,r)}async call(t){for(var r=arguments.length,n=new Array(r>1?r-1:0),a=1;a<r;a++)n[a-1]=arguments[a];return this.contractWrapper.call(t,...n)}}e(s,"contractRoles",["admin","minter","transfer"]);export{s as Token};

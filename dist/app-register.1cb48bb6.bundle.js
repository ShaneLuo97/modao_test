webpackJsonp([5],{474:function(e,t,a){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var a=0;a<t.length;a++){var s=t[a];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}return function(t,a,s){return a&&e(t.prototype,a),s&&e(t,s),t}}(),o=a(0),c=s(o),d=a(4),u=(s(d),a(16)),h=s(u),p=a(17),m=s(p),f=a(69),g=s(f),b=a(18),v=a(19),y=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t.default=e,t}(v),O=a(547),x=function(e){function t(e){i(this,t);var a=n(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.state={username:"",usernameerr:!1,usernametip:"",safechecked:!1,email:"",emailerr:!1,emailtip:"",pass:"",passerr:!1,passwordtip:"",cpass:"",cpasserr:!1,checkpasstip:"",buttondis:!1,class1:"btn btn-normal registerbtn",class2:"btn btn-gray registerbtn ",btntext1:"同意用户协议并注册",btntext2:"正在注册",regerrtip:""},a.handleOnChange=a.handleOnChange.bind(a),a.handleOnFocus=a.handleOnFocus.bind(a),a.handleOnBlur=a.handleOnBlur.bind(a),a.handleSubmit=a.handleSubmit.bind(a),a.validate=a.validate.bind(a),a.checknotexist=a.checknotexist.bind(a),a.geetestReady=a.geetestReady.bind(a),a.geetestSuccess=a.geetestSuccess.bind(a),a}return r(t,e),l(t,[{key:"geetestReady",value:function(){this.setState({safechecked:!1})}},{key:"geetestSuccess",value:function(){this.setState({safechecked:!0})}},{key:"componentDidMount",value:function(){document.title="注册-优打印"}},{key:"handleOnChange",value:function(e){var t=e.target.name,a=e.target.value.replace(/ /g,"");"username"==t?this.setState({username:a}):"email"==t?this.setState({email:a}):"pass"==t?this.setState({pass:a}):"cpass"==t&&this.setState({cpass:a})}},{key:"checknotexist",value:function(e,t){(0,b.axiosGet)(y.CheckExistUrl+"?value="+e+"&type="+t,!1,function(e){1==e.data.status?this.setState({emailerr:!1,emailtip:""}):this.setState({emailerr:!0,emailtip:e.data.msg})}.bind(this),function(e){console.log("Oops, error",e),this.setState({buttondis:!1})}.bind(this))}},{key:"validate",value:function(e,t){switch(t){case"username":return!(e.length>24||0==e.length);case"email":if(-1!=e.indexOf("@")){return/^([a-zA-Z0-9]|[._])+@([a-zA-Z0-9_-])+(\.[a-zA-Z0-9_-])+/.test(e)?(this.checknotexist(e,"email"),"ok"):"format"}return/(^0{0,1}1[3|4|5|6|7|8|9][0-9]{9}$)/.test(e)?(this.checknotexist(e,"phone"),"ok"):"format";case"pass":return e.length<6||e.length>20?"length":0!=this.state.cpass.length&&this.state.cpass!=e?"cpass":"ok";case"cpass":return this.state.pass==e&&0!=e.length}}},{key:"handleOnBlur",value:function(e){var t=e.target.name,a=e.target.value.replace(/ /g,"");"username"==t?this.validate(a,t)?this.setState({usernameerr:!1,usernametip:""}):this.setState({usernameerr:!0,usernametip:"昵称长度最长24位，不能输入空白字符"}):"email"==t?"ok"==this.validate(a,t)?this.setState({emailerr:!1,emailtip:""}):"exist"==this.validate(a,t)?this.setState({emailerr:!0,emailtip:"账号已存在"}):"format"==this.validate(a,t)&&this.setState({emailerr:!0,emailtip:"手机号格式不正确"}):"pass"==t?"ok"==this.validate(a,t)?this.setState({passerr:!1,passwordtip:""}):"length"==this.validate(a,t)?this.setState({passerr:!0,passwordtip:"密码长度请在6-20位以内"}):"cpass"==this.validate(a,t)&&this.setState({passerr:!0,cpasserr:!0,passwordtip:"两次密码输入不一致",checkpasstip:"两次密码输入不一致"}):"cpass"==t&&(this.validate(a,t)?this.setState({cpasserr:!1,passerr:!1,passwordtip:"",checkpasstip:""}):this.setState({cpasserr:!0,checkpasstip:"两次密码输入不一致"}))}},{key:"handleOnFocus",value:function(e){this.setState({regerrtip:""});var t=e.target.name;e.target.value;"username"==t?this.setState({usernameerr:!1,usernametip:"昵称长度最长24位，不能输入空白字符"}):"email"==t?this.setState({emailerr:!1,emailtip:"手机号将作为您的登录账号"}):"pass"==t?this.setState({passerr:!1,passwordtip:"密码6-20个字符，不能输入空白字符"}):"cpass"==t&&this.setState({cpasserr:!1,checkpasstip:"请再次输入密码"})}},{key:"handleSubmit",value:function(){if(!this.state.buttondis&&this.state.safechecked){this.setState({buttondis:!0});var e=this.state;if(this.validate(e.username,"username")&&"ok"==this.validate(e.email,"email")&&"ok"==this.validate(e.pass,"pass")&&this.validate(e.cpass,"cpass"))if(e.usernameerr||e.emailerr||e.passerr||e.cpasserr)this.setState({buttondis:!1,regerrtip:"您的输入有误，请检查后重试"});else{var t={},a=$("input[type=hidden][name=geetest_challenge]").val(),s=$("input[type=hidden][name=geetest_validate]").val(),i=$("input[type=hidden][name=geetest_seccode]").val();t={nickname:e.username,password:hex_md5(e.pass).toUpperCase(),phone:e.email,geetest_challenge:a,geetest_validate:s,geetest_seccode:i},(0,b.axiosPost)(y.RegisterUrl,t,!0,function(t){if(1==t.data.status){var a=t.data.data.split(",");window.location.href="activate?account="+e.email+"&id="+a[1]+"&key="+a[0]+"&type=register"}else this.refs.geetest.safeProtect(),this.setState({buttondis:!1,regerrtip:t.data.msg})}.bind(this),function(e){this.refs.geetest.safeProtect(),this.setState({buttondis:!1,regerrtip:"注册失败，请检查网络连接"})}.bind(this))}else this.setState({buttondis:!1,regerrtip:"您的输入有误，请检查后重试"})}}},{key:"render",value:function(){var e={display:"inline",width:"1px",height:"1px",overflow:"hidden"};return c.default.createElement("div",{id:"content"},c.default.createElement("section",{className:"padding-top-50 padding-bottom-100 min-width-700"},c.default.createElement("div",{className:"container"},c.default.createElement("div",{className:"row"},c.default.createElement("div",{className:"col-md-12"},c.default.createElement("div",{className:"register-panel margin-right-150 margin-left-150 no-box-shadow text-center"},c.default.createElement("div",{className:"register-title"},"注册账号",c.default.createElement("span",{className:"register-title-info"},c.default.createElement("a",{href:"login"},"已有账号、微信、QQ登录>>"))),c.default.createElement("input",{type:"text",maxLength:"24",className:this.state.usernameerr?"register-box red-border":"register-box",value:this.state.username,onFocus:this.handleOnFocus,onChange:this.handleOnChange,onBlur:this.handleOnBlur,name:"username",placeholder:"昵称"}),c.default.createElement("span",{className:this.state.usernameerr?"reg-tip red":"reg-tip"},this.state.usernametip),c.default.createElement("input",{type:"text",maxLength:"50",className:this.state.emailerr?"register-box red-border":"register-box",value:this.state.email,onFocus:this.handleOnFocus,onChange:this.handleOnChange,onBlur:this.handleOnBlur,name:"email",placeholder:"手机号"}),c.default.createElement("span",{className:this.state.emailerr?"reg-tip red":"reg-tip"},this.state.emailtip),c.default.createElement("input",{type:"password",maxLength:"20",className:this.state.passerr?"register-box red-border":"register-box",value:this.state.pass,onFocus:this.handleOnFocus,onChange:this.handleOnChange,onBlur:this.handleOnBlur,name:"pass",placeholder:"密码"}),c.default.createElement("span",{className:this.state.passerr?"reg-tip red":"reg-tip"},this.state.passwordtip),c.default.createElement("input",{type:"password",maxLength:"20",className:this.state.cpasserr?"register-box red-border":"register-box",value:this.state.cpass,onFocus:this.handleOnFocus,onChange:this.handleOnChange,onBlur:this.handleOnBlur,name:"cpass",placeholder:"确认密码"}),c.default.createElement("span",{className:this.state.cpasserr?"reg-tip red":"reg-tip"},this.state.checkpasstip),c.default.createElement("div",{id:"dom_id",className:"register-row margin-top-5"}),c.default.createElement(g.default,{ref:"geetest",onReady:this.geetestReady,onSuccess:this.geetestSuccess,classstyle:"register-box no-border horizontal-center no-padding"}),c.default.createElement("span",{className:"reg-tip red"},this.state.regerrtip),this.state.safechecked?c.default.createElement("button",{className:this.state.buttondis?this.state.class2:this.state.class1,disabled:this.state.buttondis,onClick:this.handleSubmit},this.state.buttondis?this.state.btntext2:this.state.btntext1):c.default.createElement("button",{className:this.state.class1,disabled:!this.state.safechecked,onClick:this.handleSubmit},"请先完成验证再点击注册"),c.default.createElement("span",{className:"sp-line"}),c.default.createElement("div",{id:"_umfp",style:e}),c.default.createElement("input",{type:"hidden",id:"csessionid",name:"csessionid"}),c.default.createElement("input",{type:"hidden",id:"sig",name:"sig"}),c.default.createElement("input",{type:"hidden",id:"token",name:"token"}),c.default.createElement("input",{type:"hidden",id:"scene",name:"scene"})))))),c.default.createElement(m.default,null))}}]),t}(c.default.Component),k=function(e){function t(e){i(this,t);var a=n(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));try{var s=location.search;-1!=(0,O.getBrowser)().indexOf("mobile")&&-1==s.indexOf("mobile_force")&&(window.location.href="https://m.udaing.com/register")}catch(e){}return a}return r(t,e),l(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return c.default.createElement("div",{id:"wrap"},c.default.createElement(h.default,{now:"register"}),c.default.createElement(x,null))}}]),t}(c.default.Component);t.default=k},547:function(e,t,a){"use strict";function s(){for(var e=navigator.userAgent,t=["Android","iPhone","SymbianOS","Windows Phone","iPad","iPod"],a=!0,s=0;s<t.length;s++)if(e.indexOf(t[s])>0){a=!1;break}return a}function i(){if(s())return"pc";var e=navigator.userAgent.toLowerCase();return"micromessenger"==e.match(/MicroMessenger/i)?"wechat mobile":"weibo"==e.match(/WeiBo/i)?"mobile":"qq"==e.match(/QQ/i)?"qq mobile":n.versions.ios?"mobile":n.versions.android?"mobile":void 0}Object.defineProperty(t,"__esModule",{value:!0}),t.getBrowser=i;var n={versions:function(){var e=navigator.userAgent;navigator.appVersion;return{trident:e.indexOf("Trident")>-1,presto:e.indexOf("Presto")>-1,webKit:e.indexOf("AppleWebKit")>-1,gecko:e.indexOf("Gecko")>-1&&-1==e.indexOf("KHTML"),mobile:!!e.match(/AppleWebKit.*Mobile.*/),ios:!!e.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),android:e.indexOf("Android")>-1||e.indexOf("Linux")>-1,iPhone:e.indexOf("iPhone")>-1,iPad:e.indexOf("iPad")>-1,webApp:-1==e.indexOf("Safari")}}(),language:(navigator.browserLanguage||navigator.language).toLowerCase()}}});
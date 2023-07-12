import{r as l,u as f,j as s,c as p,C as te,a as C,d as T,P as F,b as ae,e as se,f as oe,B as re}from"./index-8bbfa0a7.js";const S=l.forwardRef(({bsPrefix:e,className:t,variant:a,as:o="img",...r},n)=>{const c=f(e,"card-img");return s.jsx(o,{ref:n,className:p(a?`${c}-${a}`:c,t),...r})});S.displayName="CardImg";const ne=S,O=l.forwardRef(({bsPrefix:e,className:t,as:a="div",...o},r)=>{const n=f(e,"card-header"),c=l.useMemo(()=>({cardHeaderBsPrefix:n}),[n]);return s.jsx(te.Provider,{value:c,children:s.jsx(a,{ref:r,...o,className:p(t,n)})})});O.displayName="CardHeader";const le=O,ce=T("h5"),de=T("h6"),B=C("card-body"),ie=C("card-title",{Component:ce}),me=C("card-subtitle",{Component:de}),pe=C("card-link",{Component:"a"}),fe=C("card-text",{Component:"p"}),ue=C("card-footer"),he=C("card-img-overlay"),H=l.forwardRef(({bsPrefix:e,className:t,bg:a,text:o,border:r,body:n=!1,children:c,as:d="div",...m},i)=>{const u=f(e,"card");return s.jsx(d,{ref:i,...m,className:p(t,u,a&&`bg-${a}`,o&&`text-${o}`,r&&`border-${r}`),children:n?s.jsx(B,{children:c}):c})});H.displayName="Card";const N=Object.assign(H,{Img:ne,Title:ie,Subtitle:me,Body:B,Link:pe,Text:fe,Header:le,Footer:ue,ImgOverlay:he});function Ce(e,t){return l.Children.toArray(e).some(a=>l.isValidElement(a)&&a.type===t)}const xe={type:F.string,tooltip:F.bool,as:F.elementType},I=l.forwardRef(({as:e="div",className:t,type:a="valid",tooltip:o=!1,...r},n)=>s.jsx(e,{...r,ref:n,className:p(t,`${a}-${o?"tooltip":"feedback"}`)}));I.displayName="Feedback";I.propTypes=xe;const A=I,ye=l.createContext({}),h=ye,Q=l.forwardRef(({id:e,bsPrefix:t,className:a,type:o="checkbox",isValid:r=!1,isInvalid:n=!1,as:c="input",...d},m)=>{const{controlId:i}=l.useContext(h);return t=f(t,"form-check-input"),s.jsx(c,{...d,ref:m,type:o,id:e||i,className:p(a,t,r&&"is-valid",n&&"is-invalid")})});Q.displayName="FormCheckInput";const E=Q,G=l.forwardRef(({bsPrefix:e,className:t,htmlFor:a,...o},r)=>{const{controlId:n}=l.useContext(h);return e=f(e,"form-check-label"),s.jsx("label",{...o,ref:r,htmlFor:a||n,className:p(t,e)})});G.displayName="FormCheckLabel";const k=G,D=l.forwardRef(({id:e,bsPrefix:t,bsSwitchPrefix:a,inline:o=!1,reverse:r=!1,disabled:n=!1,isValid:c=!1,isInvalid:d=!1,feedbackTooltip:m=!1,feedback:i,feedbackType:u,className:j,style:x,title:v="",type:y="checkbox",label:$,children:w,as:X="input",...Y},Z)=>{t=f(t,"form-check"),a=f(a,"form-switch");const{controlId:R}=l.useContext(h),P=l.useMemo(()=>({controlId:e||R}),[R,e]),L=!w&&$!=null&&$!==!1||Ce(w,k),ee=s.jsx(E,{...Y,type:y==="switch"?"checkbox":y,ref:Z,isValid:c,isInvalid:d,disabled:n,as:X});return s.jsx(h.Provider,{value:P,children:s.jsx("div",{style:x,className:p(j,L&&t,o&&`${t}-inline`,r&&`${t}-reverse`,y==="switch"&&a),children:w||s.jsxs(s.Fragment,{children:[ee,L&&s.jsx(k,{title:v,children:$}),i&&s.jsx(A,{type:u,tooltip:m,children:i})]})})})});D.displayName="FormCheck";const g=Object.assign(D,{Input:E,Label:k}),M=l.forwardRef(({bsPrefix:e,type:t,size:a,htmlSize:o,id:r,className:n,isValid:c=!1,isInvalid:d=!1,plaintext:m,readOnly:i,as:u="input",...j},x)=>{const{controlId:v}=l.useContext(h);e=f(e,"form-control");let y;return m?y={[`${e}-plaintext`]:!0}:y={[e]:!0,[`${e}-${a}`]:a},s.jsx(u,{...j,type:t,size:o,ref:x,readOnly:i,id:r||v,className:p(n,y,c&&"is-valid",d&&"is-invalid",t==="color"&&`${e}-color`)})});M.displayName="FormControl";const je=Object.assign(M,{Feedback:A}),Fe=C("form-floating"),V=l.forwardRef(({controlId:e,as:t="div",...a},o)=>{const r=l.useMemo(()=>({controlId:e}),[e]);return s.jsx(h.Provider,{value:r,children:s.jsx(t,{...a,ref:o})})});V.displayName="FormGroup";const W=V,_=l.forwardRef(({as:e="label",bsPrefix:t,column:a=!1,visuallyHidden:o=!1,className:r,htmlFor:n,...c},d)=>{const{controlId:m}=l.useContext(h);t=f(t,"form-label");let i="col-form-label";typeof a=="string"&&(i=`${i} ${i}-${a}`);const u=p(r,t,o&&"visually-hidden",a&&i);return n=n||m,a?s.jsx(ae,{ref:d,as:"label",className:u,htmlFor:n,...c}):s.jsx(e,{ref:d,className:u,htmlFor:n,...c})});_.displayName="FormLabel";const Ne=_,q=l.forwardRef(({bsPrefix:e,className:t,id:a,...o},r)=>{const{controlId:n}=l.useContext(h);return e=f(e,"form-range"),s.jsx("input",{...o,type:"range",ref:r,className:p(t,e),id:a||n})});q.displayName="FormRange";const ge=q,U=l.forwardRef(({bsPrefix:e,size:t,htmlSize:a,className:o,isValid:r=!1,isInvalid:n=!1,id:c,...d},m)=>{const{controlId:i}=l.useContext(h);return e=f(e,"form-select"),s.jsx("select",{...d,size:a,ref:m,className:p(o,e,t&&`${e}-${t}`,r&&"is-valid",n&&"is-invalid"),id:c||i})});U.displayName="FormSelect";const ve=U,z=l.forwardRef(({bsPrefix:e,className:t,as:a="small",muted:o,...r},n)=>(e=f(e,"form-text"),s.jsx(a,{...r,ref:n,className:p(t,e,o&&"text-muted")})));z.displayName="FormText";const $e=z,J=l.forwardRef((e,t)=>s.jsx(g,{...e,ref:t,type:"switch"}));J.displayName="Switch";const we=Object.assign(J,{Input:g.Input,Label:g.Label}),K=l.forwardRef(({bsPrefix:e,className:t,children:a,controlId:o,label:r,...n},c)=>(e=f(e,"form-floating"),s.jsxs(W,{ref:c,className:p(t,e),controlId:o,...n,children:[a,s.jsx("label",{htmlFor:o,children:r})]})));K.displayName="FloatingLabel";const ke=K,Ie={_ref:F.any,validated:F.bool,as:F.elementType},b=l.forwardRef(({className:e,validated:t,as:a="form",...o},r)=>s.jsx(a,{...o,ref:r,className:p(e,t&&"was-validated")}));b.displayName="Form";b.propTypes=Ie;const be=Object.assign(b,{Group:W,Control:je,Floating:Fe,Check:g,Switch:we,Label:Ne,Text:$e,Range:ge,Select:ve,FloatingLabel:ke}),Le=({id:e,name:t,description:a,price:o,imgUrl:r})=>{const{getItemQuantity:n,updateCartQuantity:c}=se(),d=n(e),[m,i]=l.useState(1);l.useEffect(()=>{d===0&&i(1)},[d]);const u=j=>{i(parseInt(j.target.value))};return s.jsx("div",{children:s.jsxs(N,{className:"mb-4 h-100",children:[s.jsx(N.Img,{variant:"top",src:r,height:"360px",style:{objectFit:"cover"}}),s.jsxs(N.Body,{className:"d-flex flex-column",children:[s.jsxs(N.Title,{className:"d-flex justify-content-between align-items-baseline mb-4",children:[s.jsxs("div",{children:[s.jsx("div",{className:"fs-2",children:t}),s.jsx("div",{className:"fs-5 text-muted",children:a})]}),s.jsx("span",{className:"ms-2 text-muted",children:oe(o)})]}),s.jsxs("div",{className:"m-auto",children:[s.jsxs(be.Select,{className:"mb-2",style:{width:"130px",margin:"auto"},value:m,onChange:u,children:[d!==0&&s.jsx("option",{value:"0",children:"0(Delete)"}),[...Array(10)].map((j,x)=>s.jsx("option",{value:x+1,children:x+1},x))]}),s.jsx(re,{style:{width:"130px"},variant:d===0?"primary":d!==m?"secondary":"success",disabled:d!==0&&d===m,onClick:()=>c(e,m),children:d===0?"Add to Cart":d!==m?"Update Cart":"Added to Cart"})]})]})]},e)})};export{Le as default};
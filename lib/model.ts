export const subjects = ['Biology','Mathematics','English','History','Physics'];
export type Task = {id:string;title:string;subject:string;due:string;priority:string;status:string};
export type Lesson = {id:string;subject:string;day:number;start:string;end:string;room:string;teacher:string};
export type Note = {id:string;title:string;subject:string;content:string;favorite:boolean};
export type Card = {id:string;deck:string;front:string;back:string;box:number};
export type Plan = {id:string;subject:string;topic:string;date:string;minutes:number;done:boolean};
export type Quiz = {id:string;title:string;question:string;choices:string[];answer:string};
export type Data = {name:string;theme:string;tasks:Task[];lessons:Lesson[];notes:Note[];cards:Card[];plans:Plan[];quizzes:Quiz[];read:string[]};
export const dateKey=(d=new Date())=>`${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;
export const uid=()=>crypto.randomUUID();
export function seed():Data {const later=new Date();later.setDate(later.getDate()+3);return {name:'Maya Chen',theme:'system',tasks:[{id:'t1',title:'Photosynthesis worksheet',subject:'Biology',due:dateKey(),priority:'High',status:'In progress'},{id:'t2',title:'Trigonometry practice',subject:'Mathematics',due:dateKey(later),priority:'Medium',status:'Not started'}],lessons:[{id:'l1',subject:'Biology',day:1,start:'09:00',end:'10:00',room:'Lab 2',teacher:'Mr Patel'},{id:'l2',subject:'Mathematics',day:1,start:'11:00',end:'12:00',room:'204',teacher:'Ms Rivera'},{id:'l3',subject:'English',day:2,start:'10:00',end:'11:00',room:'118',teacher:'Ms Jones'}],notes:[{id:'n1',title:'Photosynthesis',subject:'Biology',content:'Photosynthesis converts light energy into chemical energy stored in glucose. Chlorophyll absorbs light. Chloroplasts are the site of photosynthesis. Carbon dioxide and water are reactants.',favorite:true}],cards:[{id:'c1',deck:'Photosynthesis',front:'Where does photosynthesis happen?',back:'In chloroplasts.',box:1}],plans:[],quizzes:[],read:[]};}

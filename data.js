/* ============================================
   DESTINO ESCALADA - Sistema de Reservas
   Lógica compartida
   ============================================ */

// Datos por defecto (se usan si no hay nada guardado)
const DEFAULT_DATA = {
  services: [
    {id:'s1',name:'Uso del espacio — Escalada',desc:'Acceso libre al muro',cat:'escalada',cupos:10,elemento:''},
    {id:'s2',name:'Plan Escala+ y Escala-lo-que-sea',desc:'Membresía mensual',cat:'escalada',cupos:12,elemento:''},
    {id:'s3',name:'Escalada guiada para niños',desc:'Sesión con instructor',cat:'escalada',cupos:8,elemento:''},
    {id:'s4',name:'Escalada guiada para adultos',desc:'Sesión con instructor',cat:'escalada',cupos:8,elemento:''},
    {id:'s5',name:'Uso del espacio — Danza aérea',desc:'Acceso libre al espacio',cat:'danza',cupos:6,elemento:'ambos'},
    {id:'s6',name:'Clase guiada — Danza aérea',desc:'Clase con instructora',cat:'danza',cupos:6,elemento:'ambos'},
  ],
  schedules: {
    's1':[{id:'a1',day:1,time:'08:00',cupos:10,dur:60,active:true},{id:'a2',day:3,time:'08:00',cupos:10,dur:60,active:true},{id:'a3',day:5,time:'08:00',cupos:10,dur:60,active:true},{id:'a4',day:6,time:'09:00',cupos:10,dur:120,active:true}],
    's2':[{id:'a5',day:2,time:'17:00',cupos:12,dur:90,active:true},{id:'a6',day:4,time:'17:00',cupos:12,dur:90,active:true}],
    's3':[{id:'a7',day:6,time:'10:00',cupos:8,dur:90,active:true},{id:'a8',day:0,time:'10:00',cupos:8,dur:90,active:true}],
    's4':[{id:'a9',day:2,time:'18:00',cupos:8,dur:90,active:true},{id:'a10',day:4,time:'18:00',cupos:8,dur:90,active:true}],
    's5':[{id:'a11',day:2,time:'07:00',cupos:6,dur:60,active:true},{id:'a12',day:4,time:'07:00',cupos:6,dur:60,active:true}],
    's6':[{id:'a13',day:1,time:'19:00',cupos:6,dur:75,active:true},{id:'a14',day:3,time:'19:00',cupos:6,dur:75,active:true}],
  },
  bookings: [],
  password: 'admin123'
};

const STORAGE_KEY = 'destino_admin_data';

// Cargar datos del navegador (localStorage)
function loadData() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (parsed.services && parsed.services.length > 0) return parsed;
    }
  } catch(e) {}
  return JSON.parse(JSON.stringify(DEFAULT_DATA));
}

// Guardar datos
function saveData(data) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch(e) {
    console.error('Error guardando datos:', e);
  }
}

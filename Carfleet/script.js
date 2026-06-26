// ============================================================
//  CarFleet Premium – App Logic
// ============================================================

/* ─── Data ─── */
const FLEET = [
  { id:1, type:"Economy", name:"Economy Hatchback", icon:"🚗", pax:4, bags:2, features:["AC","GPS","Aux Input"], price:"₹12–18/km" },
  { id:2, type:"Sedan", name:"Executive Sedan", icon:"🚙", pax:4, bags:3, features:["AC","GPS","Charging Port","Water"], price:"₹16–24/km" },
  { id:3, type:"Sedan", name:"Premium Sedan", icon:"🚙", pax:4, bags:3, features:["Leather Seats","AC","GPS","WiFi","Water"], price:"₹22–32/km" },
  { id:4, type:"SUV", name:"Compact SUV", icon:"🚐", pax:6, bags:4, features:["AC","GPS","Charging Port"], price:"₹20–28/km" },
  { id:5, type:"SUV", name:"Premium SUV", icon:"🚐", pax:7, bags:5, features:["Leather Seats","AC","GPS","WiFi","Sunroof"], price:"₹28–38/km" },
  { id:6, type:"Luxury", name:"Luxury Sedan", icon:"🏎️", pax:4, bags:3, features:["Premium Leather","AC","GPS","WiFi","Champagne"], price:"₹40–60/km" },
  { id:7, type:"Luxury", name:"Luxury SUV", icon:"🏎️", pax:6, bags:4, features:["Premium Leather","AC","GPS","WiFi","Entertainment"], price:"₹55–80/km" },
  { id:8, type:"Van", name:"Premium Van", icon:"🚌", pax:12, bags:8, features:["AC","GPS","USB Ports","Curtains"], price:"₹25–35/km" },
  { id:9, type:"Van", name:"Mini Bus", icon:"🚌", pax:20, bags:15, features:["AC","GPS","Entertainment","Reclining Seats"], price:"₹30–45/km" },
  { id:10, type:"Coach", name:"Luxury Coach", icon:"🚍", pax:45, bags:40, features:["AC","GPS","Entertainment","Reclining Seats","Toilet"], price:"₹45–65/km" },
];

const SERVICES = [
  { icon:"🏢", name:"Corporate Transportation", desc:"Seamless executive travel for your entire workforce. Dedicated account management, GST billing, and real-time tracking for corporate clients.", benefits:["Dedicated fleet manager","GST invoicing","Monthly billing","Real-time tracking","Priority support"] },
  { icon:"✈️", name:"Airport Transfers", desc:"Reliable, punctual airport pickups and drop-offs. Flight tracking ensures we're always there on time, even with delays.", benefits:["Flight tracking","Meet & greet","Luggage assistance","24/7 availability","Fixed pricing"] },
  { icon:"👥", name:"Employee Commute", desc:"Cost-effective daily employee transportation with optimized routing, attendance tracking, and safety monitoring.", benefits:["Route optimization","Attendance system","Safety monitoring","AC vehicles","Door-to-door service"] },
  { icon:"💍", name:"Wedding Transportation", desc:"Make your special day unforgettable with our premium wedding fleet. Decorated vehicles, punctual service, and professional chauffeurs.", benefits:["Decorated vehicles","Professional chauffeurs","Multiple vehicles","Coordination service","Photography-ready"] },
  { icon:"🎪", name:"Event Logistics", desc:"End-to-end transportation management for conferences, seminars, product launches, and corporate events.", benefits:["Fleet coordination","Guest management","Multiple pickups","On-site support","Post-event drops"] },
  { icon:"👑", name:"VIP Chauffeur", desc:"Ultra-premium chauffeur service for dignitaries, executives, and VIP clients demanding the highest level of discretion.", benefits:["Background-verified drivers","Luxury fleet","Complete privacy","Security trained","Advance route planning"] },
  { icon:"📋", name:"Long-Term Leasing", desc:"Flexible fleet leasing solutions for businesses. Monthly or annual contracts with dedicated vehicles and drivers.", benefits:["Dedicated vehicle","Dedicated driver","Monthly contracts","Maintenance included","Priority support"] },
  { icon:"🗺️", name:"Outstation Travel", desc:"Comfortable intercity and outstation trips with experienced drivers who know the routes. AC vehicles with competitive per-km rates.", benefits:["Experienced drivers","AC vehicles","Per-km pricing","Overnight allowance","24/7 support"] },
];

const FAQS = [
  { q:"How do I book a vehicle?", a:"Fill out the enquiry form on our Contact page or click 'Book an Enquiry' anywhere on the site. Our team will respond within 2 hours with a confirmed quote." },
  { q:"Do you offer corporate accounts?", a:"Yes. We offer dedicated corporate accounts with GST billing, monthly statements, a dedicated account manager, and priority vehicle availability." },
  { q:"What areas do you cover?", a:"We cover pan-India with primary operations in major metros (Mumbai, Delhi, Bangalore, Hyderabad, Chennai, Pune, Kolkata). Outstation and airport transfers available nationwide." },
  { q:"Are your drivers verified?", a:"All drivers undergo police verification, medical fitness tests, and defensive driving training. Driver details are shared before every trip." },
  { q:"What is your cancellation policy?", a:"Cancellations made 4+ hours before pickup are fully refundable. Within 4 hours: 50% charge. No-shows: full charge." },
  { q:"Do you provide monthly fleet leasing?", a:"Yes. Monthly and annual leasing options are available for corporates needing dedicated vehicles and drivers. Contact us for a custom proposal." },
  { q:"How is pricing calculated?", a:"Pricing is per-kilometer or fixed for specific routes (especially airport transfers). Toll, parking, and driver night allowance are billed separately." },
];

const COVERAGE = ["Mumbai","Delhi NCR","Bangalore","Hyderabad","Chennai","Pune","Kolkata","Ahmedabad","Jaipur","Surat","Chandigarh","Kochi","Goa","Agra","Mysore","Coimbatore"];

const TEAM = [
  { name:"Rajesh Kumar", role:"CEO & Founder", init:"RK" },
  { name:"Priya Sharma", role:"Head of Operations", init:"PS" },
  { name:"Arjun Mehta", role:"Fleet Manager", init:"AM" },
  { name:"Sneha Patel", role:"Customer Success", init:"SP" },
  { name:"Vivek Rao", role:"Technology Lead", init:"VR" },
  { name:"Divya Nair", role:"Finance Head", init:"DN" },
];

const CLIENT_LOGOS = ["TechCorp India","GlobalBankers","MegaMedia","SwiftLogistics","PharmaPlus","RealtyGroup","FinServe Ltd","EventPros"];

const TESTIMONIALS = [
  { stars:5, text:"CarFleet has transformed our corporate travel experience. The vehicles are always pristine, drivers professional, and billing is hassle-free. Highly recommended for any enterprise.", author:"Amit Singhania", role:"VP Operations, TechCorp India", init:"AS" },
  { stars:5, text:"We use CarFleet for all our airport transfers and client pickups. Never missed a flight, never a late vehicle. The premium sedan fleet is exactly what our executive team expects.", author:"Priyanka Verma", role:"Executive Assistant, GlobalBankers", init:"PV" },
  { stars:5, text:"Our wedding day was made even more special with CarFleet. The decorated vehicles, professional chauffeurs, and perfect timing exceeded all expectations.", author:"Rohit & Neha Kapoor", role:"Wedding Clients", init:"RK" },
  { stars:5, text:"Managed our annual conference logistics with CarFleet — 200+ delegates, multiple hotels, seamless coordination. Will definitely use again next year.", author:"Suresh Menon", role:"Event Director, EventPros", init:"SM" },
  { stars:4, text:"Excellent service for outstation travel. The driver was knowledgeable, vehicle comfortable, and pricing fair. Makes long business trips enjoyable.", author:"Lakshmi Iyer", role:"Sales Head, FinServe Ltd", init:"LI" },
];

/* ─── State ─── */
let enquiries = JSON.parse(localStorage.getItem('cf_enquiries') || '[]');
let adminFilter = 'all';
let adminSearch = '';
let adminDateFrom = '';
let adminDateTo = '';
let currentModal = null;
let statsAnimated = false;

/* ─── Router ─── */
function navigate(page) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  const target = document.getElementById('page-' + page);
  if (target) {
    target.classList.add('active');
    window.scrollTo(0, 0);
  }
  document.querySelectorAll('[data-page]').forEach(a => {
    a.classList.toggle('active', a.dataset.page === page);
  });
  // Close mobile menu
  document.querySelector('.mobile-menu').classList.remove('open');
}

/* ─── Navbar scroll ─── */
window.addEventListener('scroll', () => {
  const nav = document.querySelector('.navbar');
  if (nav) nav.classList.toggle('scrolled', window.scrollY > 40);

  // Animate stats when in view
  if (!statsAnimated) {
    const statsSection = document.querySelector('.stats-section');
    if (statsSection) {
      const rect = statsSection.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) {
        animateCounters();
        statsAnimated = true;
      }
    }
  }
});

/* ─── Mobile menu ─── */
function toggleMobileMenu() {
  document.querySelector('.mobile-menu').classList.toggle('open');
}

/* ─── Counter animation ─── */
function animateCounters() {
  document.querySelectorAll('[data-count]').forEach(el => {
    const target = parseInt(el.dataset.count);
    const suffix = el.dataset.suffix || '';
    let current = 0;
    const step = Math.max(1, Math.floor(target / 60));
    const timer = setInterval(() => {
      current = Math.min(current + step, target);
      el.textContent = current.toLocaleString() + suffix;
      if (current >= target) clearInterval(timer);
    }, 30);
  });
}

/* ─── Fleet rendering ─── */
function renderFleet(filtered) {
  const grid = document.getElementById('fleet-grid');
  if (!grid) return;
  const data = filtered || FLEET;
  if (data.length === 0) {
    grid.innerHTML = `<div class="no-data" style="grid-column:1/-1"><div class="icon">🚗</div><p>No vehicles match your filters.</p></div>`;
    return;
  }
  grid.innerHTML = data.map(v => `
    <div class="fleet-card">
      <div class="fleet-card-img-placeholder">
        <span style="position:relative;z-index:1">${v.icon}</span>
      </div>
      <div class="fleet-card-body">
        <div class="badge badge-blue">${v.type}</div>
        <h3 style="margin-top:10px">${v.name}</h3>
        <div class="fleet-card-meta">
          <span>👥 ${v.pax} Pax</span>
          <span>🧳 ${v.bags} Bags</span>
        </div>
        <div class="fleet-card-features">
          ${v.features.map(f => `<span>${f}</span>`).join('')}
        </div>
        <div class="fleet-card-footer">
          <span style="font-size:0.82rem;color:var(--text-muted)">From <strong style="color:var(--accent)">${v.price}</strong></span>
          <button class="btn btn-primary btn-sm" onclick="openEnquiryFromFleet('${v.name}')">Enquire</button>
        </div>
      </div>
    </div>
  `).join('');
}

function filterFleet() {
  const type = document.getElementById('filter-type')?.value || '';
  const capacity = document.getElementById('filter-capacity')?.value || '';
  let filtered = [...FLEET];
  if (type) filtered = filtered.filter(v => v.type === type);
  if (capacity) {
    const cap = parseInt(capacity);
    filtered = filtered.filter(v => {
      if (cap === 4) return v.pax <= 4;
      if (cap === 7) return v.pax >= 5 && v.pax <= 10;
      if (cap === 11) return v.pax > 10;
      return true;
    });
  }
  renderFleet(filtered);
}

function openEnquiryFromFleet(vehicleName) {
  navigate('contact');
  setTimeout(() => {
    const sel = document.getElementById('vehicle-type');
    if (sel) sel.value = vehicleName.includes('Economy') ? 'Economy' :
      vehicleName.includes('SUV') ? 'SUV' :
      vehicleName.includes('Coach') ? 'Coach' :
      vehicleName.includes('Bus') ? 'Mini Bus' :
      vehicleName.includes('Van') ? 'Van' :
      vehicleName.includes('Luxury') ? 'Luxury' : 'Sedan';
  }, 100);
}

/* ─── Services rendering ─── */
function renderServices() {
  const grid = document.getElementById('services-grid');
  if (!grid) return;
  grid.innerHTML = SERVICES.map(s => `
    <div class="service-card">
      <div class="service-icon">${s.icon}</div>
      <h3>${s.name}</h3>
      <p>${s.desc}</p>
      <ul class="service-benefits">
        ${s.benefits.map(b => `<li>${b}</li>`).join('')}
      </ul>
      <button class="btn btn-outline btn-sm" onclick="navigate('contact')">Request Quote</button>
    </div>
  `).join('');
}

/* ─── Testimonials ─── */
function renderTestimonials() {
  const track = document.getElementById('testimonials-track');
  if (!track) return;
  track.innerHTML = TESTIMONIALS.map(t => `
    <div class="testimonial-card">
      <div class="testimonial-stars">${'★'.repeat(t.stars)}${'☆'.repeat(5 - t.stars)}</div>
      <p class="testimonial-text">"${t.text}"</p>
      <div class="testimonial-author">
        <div class="testimonial-avatar">${t.init}</div>
        <div>
          <div class="testimonial-name">${t.author}</div>
          <div class="testimonial-role">${t.role}</div>
        </div>
      </div>
    </div>
  `).join('');
}

/* ─── Coverage ─── */
function renderCoverage() {
  const grid = document.getElementById('coverage-grid');
  if (!grid) return;
  grid.innerHTML = COVERAGE.map(c => `<span class="coverage-tag">📍 ${c}</span>`).join('');
}

/* ─── FAQ ─── */
function renderFAQ() {
  const list = document.getElementById('faq-list');
  if (!list) return;
  list.innerHTML = FAQS.map((f, i) => `
    <div class="faq-item" id="faq-${i}">
      <button class="faq-q" onclick="toggleFAQ(${i})">
        <span>${f.q}</span>
        <svg class="faq-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9l6 6 6-6"/></svg>
      </button>
      <div class="faq-a"><div class="faq-a-inner">${f.a}</div></div>
    </div>
  `).join('');
}

function toggleFAQ(i) {
  const item = document.getElementById('faq-' + i);
  const wasOpen = item.classList.contains('open');
  document.querySelectorAll('.faq-item').forEach(el => el.classList.remove('open'));
  if (!wasOpen) item.classList.add('open');
}

/* ─── Team ─── */
function renderTeam() {
  const grid = document.getElementById('team-grid');
  if (!grid) return;
  grid.innerHTML = TEAM.map(m => `
    <div class="team-card">
      <div class="team-avatar">${m.init}</div>
      <h3>${m.name}</h3>
      <p class="role">${m.role}</p>
    </div>
  `).join('');
}

/* ─── Client logos ─── */
function renderClients() {
  const el = document.getElementById('client-logos');
  if (!el) return;
  el.innerHTML = CLIENT_LOGOS.map(c => `<div class="client-logo">${c}</div>`).join('');
}

/* ─── Enquiry form ─── */
function handleEnquirySubmit(e) {
  e.preventDefault();
  const form = e.target;
  const data = Object.fromEntries(new FormData(form));
  data.id = 'ENQ-' + Date.now().toString().slice(-6);
  data.date_received = new Date().toISOString();
  data.status = 'New';
  enquiries.unshift(data);
  localStorage.setItem('cf_enquiries', JSON.stringify(enquiries));
  form.reset();
  const success = document.getElementById('form-success');
  if (success) { success.classList.add('show'); setTimeout(() => success.classList.remove('show'), 6000); }
  showToast('✅ Enquiry submitted! We\'ll contact you within 2 hours.', 'success');
}

/* ─── Admin ─── */
function getFilteredEnquiries() {
  let data = [...enquiries];
  if (adminFilter !== 'all') data = data.filter(e => e.status === adminFilter);
  if (adminSearch) {
    const q = adminSearch.toLowerCase();
    data = data.filter(e =>
      (e.full_name || '').toLowerCase().includes(q) ||
      (e.company || '').toLowerCase().includes(q) ||
      (e.email || '').toLowerCase().includes(q) ||
      (e.id || '').toLowerCase().includes(q)
    );
  }
  if (adminDateFrom) data = data.filter(e => e.date_received >= adminDateFrom);
  if (adminDateTo) data = data.filter(e => e.date_received <= adminDateTo + 'T23:59:59');
  return data;
}

function renderMetrics() {
  const total = enquiries.length;
  const pending = enquiries.filter(e => e.status === 'New' || e.status === 'Contacted').length;
  const confirmed = enquiries.filter(e => e.status === 'Confirmed').length;
  const revenue = confirmed * 8500;
  const totalEl = document.getElementById('metric-total');
  const pendingEl = document.getElementById('metric-pending');
  const confirmedEl = document.getElementById('metric-confirmed');
  const revenueEl = document.getElementById('metric-revenue');
  if (totalEl) totalEl.textContent = total;
  if (pendingEl) pendingEl.textContent = pending;
  if (confirmedEl) confirmedEl.textContent = confirmed;
  if (revenueEl) revenueEl.textContent = '₹' + revenue.toLocaleString('en-IN');
}

function renderEnquiriesTable() {
  const tbody = document.getElementById('enquiries-tbody');
  if (!tbody) return;
  const data = getFilteredEnquiries();
  renderMetrics();
  if (data.length === 0) {
    tbody.innerHTML = `<tr><td colspan="8" style="text-align:center;padding:40px;color:var(--text-muted)">No enquiries found</td></tr>`;
    return;
  }
  tbody.innerHTML = data.map(e => `
    <tr>
      <td><span style="font-size:0.78rem;font-weight:700;color:var(--accent)">${e.id}</span></td>
      <td>
        <div style="font-weight:600">${e.full_name || '—'}</div>
        <div style="font-size:0.78rem;color:var(--text-muted)">${e.company || ''}</div>
      </td>
      <td style="color:var(--text-secondary)">${e.mobile || '—'}</td>
      <td style="color:var(--text-secondary)">${e.service_type || '—'}</td>
      <td style="color:var(--text-secondary)">${e.pickup_date || '—'}</td>
      <td>${statusBadge(e.status)}</td>
      <td>
        <select class="status-select" onchange="updateStatus('${e.id}', this.value)">
          ${['New','Contacted','Quotation Sent','Confirmed','Cancelled'].map(s =>
            `<option value="${s}" ${e.status === s ? 'selected' : ''}>${s}</option>`
          ).join('')}
        </select>
      </td>
      <td>
        <button class="btn btn-sm btn-outline" onclick="openModal('${e.id}')">View</button>
      </td>
    </tr>
  `).join('');
}

function statusBadge(status) {
  const map = {
    'New': 'badge-blue',
    'Contacted': 'badge-yellow',
    'Quotation Sent': 'badge-yellow',
    'Confirmed': 'badge-green',
    'Cancelled': 'badge-red',
  };
  return `<span class="badge ${map[status] || 'badge-blue'}">${status}</span>`;
}

function updateStatus(id, newStatus) {
  const idx = enquiries.findIndex(e => e.id === id);
  if (idx !== -1) {
    enquiries[idx].status = newStatus;
    localStorage.setItem('cf_enquiries', JSON.stringify(enquiries));
    renderEnquiriesTable();
    showToast(`Status updated to "${newStatus}"`);
  }
}

function openModal(id) {
  const e = enquiries.find(e => e.id === id);
  if (!e) return;
  currentModal = e;
  const modal = document.getElementById('enquiry-modal');
  const content = document.getElementById('modal-content');
  content.innerHTML = `
    <h2 style="margin-bottom:8px">${e.full_name || '—'}</h2>
    <div style="display:flex;gap:10px;align-items:center;flex-wrap:wrap;margin-bottom:4px">
      ${statusBadge(e.status)}
      <span style="font-size:0.78rem;color:var(--text-muted)">${e.id}</span>
      <span style="font-size:0.78rem;color:var(--text-muted)">Received: ${new Date(e.date_received).toLocaleString('en-IN')}</span>
    </div>
    <div class="modal-detail-grid">
      ${detail('Company', e.company)}
      ${detail('Mobile', e.mobile)}
      ${detail('Email', e.email)}
      ${detail('Service', e.service_type)}
      ${detail('Vehicle', e.vehicle_type)}
      ${detail('Passengers', e.passengers)}
      ${detail('Pickup', e.pickup_location, true)}
      ${detail('Destination', e.destination, true)}
      ${detail('Date', e.pickup_date)}
      ${detail('Time', e.pickup_time)}
      ${detail('Trip Type', e.trip_type)}
      ${e.requirements ? detail('Additional Notes', e.requirements, true) : ''}
    </div>
  `;
  modal.classList.add('open');
}

function detail(label, value, full=false) {
  return `<div class="modal-detail-item${full ? ' full' : ''}">
    <div class="mdi-label">${label}</div>
    <div class="mdi-value">${value || '—'}</div>
  </div>`;
}

function closeModal() {
  document.getElementById('enquiry-modal').classList.remove('open');
}

function setAdminFilter(f) {
  adminFilter = f;
  document.querySelectorAll('.filter-btn').forEach(b => {
    b.classList.toggle('active', b.dataset.filter === f);
  });
  renderEnquiriesTable();
}

/* ─── Toast ─── */
function showToast(message, type = '') {
  const container = document.getElementById('toast-container');
  if (!container) return;
  const toast = document.createElement('div');
  toast.className = `toast${type ? ' ' + type : ''}`;
  toast.innerHTML = `<span class="toast-icon">${type === 'success' ? '✅' : 'ℹ️'}</span><span>${message}</span>`;
  container.appendChild(toast);
  setTimeout(() => { toast.remove(); }, 4500);
}

/* ─── Sample data seeder ─── */
function seedSampleData() {
  if (enquiries.length > 0) return;
  const samples = [
    { id:'ENQ-001', full_name:'Aryan Kapoor', company:'TechSoft Pvt Ltd', mobile:'9876543210', email:'aryan@techsoft.in', service_type:'Corporate Transportation', vehicle_type:'Sedan', passengers:'4', pickup_location:'BKC, Mumbai', destination:'Chhatrapati Shivaji Airport', pickup_date:'2026-06-15', pickup_time:'06:00', trip_type:'One Way', requirements:'', status:'Confirmed', date_received:'2026-06-10T09:00:00.000Z' },
    { id:'ENQ-002', full_name:'Nisha Malhotra', company:'', mobile:'9123456780', email:'nisha.m@gmail.com', service_type:'Airport Transfer', vehicle_type:'SUV', passengers:'3', pickup_location:'Powai, Mumbai', destination:'Mumbai Airport T2', pickup_date:'2026-06-16', pickup_time:'04:30', trip_type:'One Way', requirements:'Early morning pickup, please be punctual', status:'Contacted', date_received:'2026-06-11T14:30:00.000Z' },
    { id:'ENQ-003', full_name:'Rahul Sharma', company:'Event Masters', mobile:'9988776655', email:'rahul@eventmasters.co', service_type:'Event Logistics', vehicle_type:'Coach', passengers:'45', pickup_location:'Bandra, Mumbai', destination:'Lonavala Resort', pickup_date:'2026-06-20', pickup_time:'08:00', trip_type:'Round Trip', requirements:'Corporate team outing, need AC coach', status:'Quotation Sent', date_received:'2026-06-11T10:00:00.000Z' },
    { id:'ENQ-004', full_name:'Sunita Reddy', company:'', mobile:'9765432109', email:'sunita.r@gmail.com', service_type:'Wedding Transportation', vehicle_type:'Luxury', passengers:'6', pickup_location:'Juhu, Mumbai', destination:'Hotel Taj, Colaba', pickup_date:'2026-06-22', pickup_time:'09:00', trip_type:'Round Trip', requirements:'Wedding ceremony, need decorated cars', status:'New', date_received:'2026-06-12T08:15:00.000Z' },
    { id:'ENQ-005', full_name:'Dev Joshi', company:'GlobalTrade Inc', mobile:'8877665544', email:'dev.j@globaltrade.com', service_type:'Long-Term Leasing', vehicle_type:'Sedan', passengers:'4', pickup_location:'Nariman Point', destination:'Multiple', pickup_date:'2026-07-01', pickup_time:'09:00', trip_type:'Round Trip', requirements:'Monthly contract for 3 executive sedans', status:'New', date_received:'2026-06-12T11:30:00.000Z' },
  ];
  enquiries = samples;
  localStorage.setItem('cf_enquiries', JSON.stringify(enquiries));
}

/* ─── Init ─── */
document.addEventListener('DOMContentLoaded', () => {
  seedSampleData();
  renderFleet();
  renderServices();
  renderTestimonials();
  renderCoverage();
  renderFAQ();
  renderTeam();
  renderClients();
  renderEnquiriesTable();
  navigate('home');

  // Nav clicks
  document.querySelectorAll('[data-page]').forEach(el => {
    el.addEventListener('click', (e) => {
      e.preventDefault();
      navigate(el.dataset.page);
      if (el.dataset.page === 'admin') {
        renderEnquiriesTable();
      }
    });
  });

  // Fleet filters
  document.getElementById('filter-type')?.addEventListener('change', filterFleet);
  document.getElementById('filter-capacity')?.addEventListener('change', filterFleet);

  // Enquiry form
  document.getElementById('enquiry-form')?.addEventListener('submit', handleEnquirySubmit);

  // Admin search
  document.getElementById('admin-search-input')?.addEventListener('input', (e) => {
    adminSearch = e.target.value;
    renderEnquiriesTable();
  });

  // Admin date filters
  document.getElementById('date-from')?.addEventListener('change', (e) => {
    adminDateFrom = e.target.value;
    renderEnquiriesTable();
  });
  document.getElementById('date-to')?.addEventListener('change', (e) => {
    adminDateTo = e.target.value;
    renderEnquiriesTable();
  });

  // Modal close on backdrop
  document.getElementById('enquiry-modal')?.addEventListener('click', (e) => {
    if (e.target === document.getElementById('enquiry-modal')) closeModal();
  });

  // Testimonials auto-scroll
  const track = document.getElementById('testimonials-track');
  if (track) {
    let scrolling = false;
    setInterval(() => {
      if (!scrolling) {
        scrolling = true;
        const maxScroll = track.scrollWidth - track.clientWidth;
        if (track.scrollLeft >= maxScroll - 10) {
          track.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          track.scrollBy({ left: 364, behavior: 'smooth' });
        }
        setTimeout(() => scrolling = false, 800);
      }
    }, 4000);
  }
});

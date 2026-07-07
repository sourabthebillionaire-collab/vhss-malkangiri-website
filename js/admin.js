// js/admin.js
// Handles admin panel login logic and dashboard rendering

document.addEventListener('DOMContentLoaded', () => {
  // --- Admin Login ---
  const passInput = document.getElementById('password');
  if (passInput) {
    // Caps lock warning
    passInput.addEventListener('keyup', (e) => {
      const capsWarning = document.getElementById('capsWarning');
      if (e.getModifierState && e.getModifierState('CapsLock')) {
        capsWarning.classList.remove('hidden');
      } else {
        capsWarning.classList.add('hidden');
      }
    });
  }

  // --- Admin Dashboard ---
  if (document.getElementById('statCards')) {
    renderDashboard();
    
    // Live clock update
    setInterval(updateClock, 1000);
    updateClock();
    
    // Ensure admin is logged in
    requireAdmin();
  }
  
  // Set active nav
  setActiveNav();
});

// --- Login Functions ---
window.togglePass = function() {
  const p = document.getElementById('password');
  const btn = document.getElementById('toggleBtn');
  if (p.type === 'password') {
    p.type = 'text';
    btn.textContent = '🔒';
  } else {
    p.type = 'password';
    btn.textContent = '👁️';
  }
};

window.doLogin = function() {
  const p = document.getElementById('password').value;
  const err = document.getElementById('errMsg');
  const btn = document.querySelector('.login-btn');
  
  if (!p) {
    err.textContent = "❌ Please enter a password.";
    err.classList.add('show');
    return;
  }
  
  // Show spinner
  const origText = btn.innerHTML;
  btn.innerHTML = 'Verifying <span class="button-spinner"></span>';
  btn.disabled = true;

  setTimeout(() => {
    if (adminLogin(p)) {
      window.location.href = 'dashboard.html';
    } else {
      err.textContent = "❌ Incorrect password. Please try again.";
      err.classList.add('show');
      btn.innerHTML = origText;
      btn.disabled = false;
      document.querySelector('.login-card').classList.add('shake');
      setTimeout(() => document.querySelector('.login-card').classList.remove('shake'), 400);
    }
  }, 800);
};

// --- Dashboard Functions ---
function updateClock() {
  const now = new Date();
  const dOpt = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  
  const dateEl = document.getElementById('currentDate');
  const clockEl = document.getElementById('liveClock');
  
  if (dateEl) dateEl.textContent = now.toLocaleDateString('en-IN', dOpt);
  if (clockEl) clockEl.textContent = now.toLocaleTimeString('en-IN', { hour12: true });
}

function renderDashboard() {
  // Render Stats
  const stats = getData('stats');
  const statCards = document.getElementById('statCards');
  if (statCards && stats) {
    statCards.innerHTML = `
      <div style="background:white;padding:24px;border-radius:14px;box-shadow:var(--shadow);border-bottom:3px solid var(--saffron)">
        <div style="font-size:32px;font-weight:900;color:var(--navy);font-family:'Playfair Display',serif">${stats.students}</div>
        <div style="font-size:13px;color:var(--mid-gray);font-weight:600;text-transform:uppercase;letter-spacing:1px">Total Students</div>
      </div>
      <div style="background:white;padding:24px;border-radius:14px;box-shadow:var(--shadow);border-bottom:3px solid var(--saffron)">
        <div style="font-size:32px;font-weight:900;color:var(--navy);font-family:'Playfair Display',serif">${stats.faculty}</div>
        <div style="font-size:13px;color:var(--mid-gray);font-weight:600;text-transform:uppercase;letter-spacing:1px">Faculty Members</div>
      </div>
      <div style="background:white;padding:24px;border-radius:14px;box-shadow:var(--shadow);border-bottom:3px solid var(--saffron)">
        <div style="font-size:32px;font-weight:900;color:var(--navy);font-family:'Playfair Display',serif">${getData('courses').length}</div>
        <div style="font-size:13px;color:var(--mid-gray);font-weight:600;text-transform:uppercase;letter-spacing:1px">Active Courses</div>
      </div>
      <div style="background:white;padding:24px;border-radius:14px;box-shadow:var(--shadow);border-bottom:3px solid var(--saffron)">
        <div style="font-size:32px;font-weight:900;color:var(--navy);font-family:'Playfair Display',serif">${getData('news').length}</div>
        <div style="font-size:13px;color:var(--mid-gray);font-weight:600;text-transform:uppercase;letter-spacing:1px">Announcements</div>
      </div>
    `;
    
    // Add simple CSS for stat-cards grid if not defined elsewhere
    statCards.style.display = 'grid';
    statCards.style.gridTemplateColumns = 'repeat(auto-fit, minmax(200px, 1fr))';
    statCards.style.gap = '20px';
    statCards.style.marginBottom = '32px';
  }

  // Render Recent News
  const news = getData('news');
  const recentNews = document.getElementById('recentNews');
  if (recentNews && news) {
    const recent = news.slice(0, 3);
    if (recent.length === 0) {
      recentNews.innerHTML = '<tr><td colspan="4" style="text-align:center;padding:20px;color:var(--mid-gray)">No recent news.</td></tr>';
    } else {
      recentNews.innerHTML = recent.map(n => `
        <tr>
          <td><strong>${n.title}</strong></td>
          <td><span class="badge badge-saffron">${n.type}</span></td>
          <td>${formatDate(n.date)}</td>
          <td><a href="news.html" class="btn btn-sm btn-outline">Edit</a></td>
        </tr>
      `).join('');
    }
  }
  
  // Last Updated
  const lastEl = document.getElementById('lastUpdated');
  if (lastEl) {
    lastEl.textContent = 'Last synced: Just now';
  }
}

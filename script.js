// 留言板提示
document.querySelectorAll('.coming-soon').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      alert('留言板功能正在开发中，敬请期待！🎉');
    });
  });
  
  // 导航栏滚动效果
  window.addEventListener('scroll', () => {
    const nav = document.querySelector('.main-nav');
    if (window.scrollY > 100) {
      nav.style.background = 'rgba(255,255,255,0.98)';
    } else {
      nav.style.background = 'rgba(255,255,255,0.95)';
    }
  });
  
  // 页面平滑滚动
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  // 点击文字展开图片
document.querySelectorAll('.show-image').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const imgSrc = this.getAttribute('data-img');
      document.getElementById('modal-image').src = imgSrc;
      document.querySelector('.image-modal').style.display = 'block';
    });
  });
  
  // 关闭弹窗
  document.querySelector('.close-modal').addEventListener('click', function() {
    document.querySelector('.image-modal').style.display = 'none';
  });
  
  // 点击蒙层关闭
  window.addEventListener('click', function(e) {
    if (e.target === document.querySelector('.image-modal')) {
      document.querySelector('.image-modal').style.display = 'none';
    }
  });
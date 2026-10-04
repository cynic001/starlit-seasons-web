// Browser device hints are advisory; a spoofed user agent can bypass this gate.
function isStarlitPhone(device) {
  const ua = device.userAgent || '';
  if (/iPad|Tablet|PlayBook|Silk/i.test(ua)) return false;
  if (/Macintosh/i.test(ua) && device.maxTouchPoints > 1) return false; // iPad desktop UA
  if (/iPhone|iPod|Windows Phone|IEMobile|BlackBerry|BB10|Opera Mini/i.test(ua)) return true;
  if (/Android/i.test(ua)) return /Mobile/i.test(ua);
  return device.mobile === true;
}
if (typeof module !== 'undefined') module.exports = isStarlitPhone;
if (typeof window !== 'undefined') {
  window.starlitPhoneBlocked = isStarlitPhone({userAgent:navigator.userAgent, maxTouchPoints:navigator.maxTouchPoints, mobile:navigator.userAgentData?.mobile});
  if (window.starlitPhoneBlocked) document.addEventListener('DOMContentLoaded', () => {
    document.documentElement.lang = 'ko';
    document.body.style.cssText = 'margin:0;min-height:100svh;display:grid;place-items:center;padding:24px;box-sizing:border-box;background:radial-gradient(ellipse at top,#376c68,#152d38);color:#fff8e7;font-family:system-ui,sans-serif;overflow:auto;touch-action:auto;';
    document.body.replaceChildren();
    const card = document.createElement('main');
    card.style.cssText = 'width:100%;max-width:480px;text-align:center;border:1px solid #bd9b63;border-radius:24px;padding:36px 24px;box-sizing:border-box;background:#fff8e7;color:#285f56;box-shadow:0 16px 64px #0005;';
    const title = document.createElement('h1'); title.textContent = '별빛의 계절'; title.style.cssText = 'font-size:30px;margin:0 0 24px;';
    const heading = document.createElement('h2'); heading.textContent = '더 넓은 화면에서 만나요'; heading.style.cssText = 'font-size:22px;margin:0 0 16px;';
    const text = document.createElement('p'); text.textContent = '스마트폰에서는 게임을 실행할 수 없어요. PC 또는 태블릿으로 접속해 주세요.'; text.style.cssText = 'font-size:18px;line-height:1.8;color:#4d5249;margin:0;';
    card.append(title,heading,text); document.body.append(card);
  });
}

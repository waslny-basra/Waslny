# وصلني | WASALNI — PWA تجريبي

واجهة عربية متجاوبة للزبون والكابتن والإدارة مستوحاة من ألوان شط العرب.

## الصفحات
- `customer.html` واجهة الزبون
- `driver.html` واجهة الكابتن
- `admin.html` واجهة الإدارة
- `index.html` يحول إلى واجهة الزبون من خلال نفس الواجهة

## تشغيل ونشر
ارفع محتويات المجلد إلى جذر مستودع GitHub عام، ثم Settings → Pages → Deploy from a branch → main / (root) → Save. الروابط تصبح:
`https://USERNAME.github.io/REPO/customer.html`
`https://USERNAME.github.io/REPO/driver.html`
`https://USERNAME.github.io/REPO/admin.html`

## حدود النسخة
- التخزين `localStorage` على الجهاز والمتصفح نفسه فقط، ولا يوجد تزامن بين الأجهزة.
- لا يوجد تسجيل دخول أو مصادقة أو خرائط حية أو تتبع أو تسعير فعلي أو مدفوعات.
- لوحة الإدارة مكشوفة لأي شخص يعرف الرابط؛ **للتجربة فقط**.
- لتشغيل فعلي يلزم قاعدة بيانات وصلاحيات آمنة (مثل Supabase مع RLS)، وإجراءات قانونية وسلامة ومراجعة مزود خرائط.
- يتطلب تثبيت PWA عبر HTTPS (مثل GitHub Pages)؛ الأيقونة SVG قد تحتاج PNG لدعم أوسع.

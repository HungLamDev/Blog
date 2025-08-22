---
slug: deploy-project-len-cloudflare-pages
title: Hướng dẫn deploy project của bạn lên Cloudflare Pages
image: https://blog.thanhnamnguyen.dev/_next/image?url=https%3A%2F%2Fcdn.hashnode.com%2Fres%2Fhashnode%2Fimage%2Fupload%2Fv1710687674044%2F8624efc0-5a2b-4407-b2b3-bdf1b29d5e79.png%3Fw%3D1600%26h%3D840%26fit%3Dcrop%26crop%3Dentropy%26auto%3Dcompress%2Cformat%26format%3Dwebp&w=1920&q=75
authors: [endi]
tags: [cloudflare, deploy, tutorial]
---
<div className="w-full">
  <img src="/img/cloudflare-banner.png" alt="Cloudflare Pages" className="rounded-xl shadow-md mb-6" />
</div>
![Cloudflare Pages](https://cdn.hashnode.com/res/hashnode/image/upload/v1711217760169/OfI6ARj_Q.jpg?w=800&amp;fit=crop&amp;crop=entropy&amp;auto=compress,format&amp;format=webp)
Nội dung bài viết...

This is the summary of a very long blog post,

Use a `<!--truncate-->` comment to limit blog post size in the list view.

<!--truncate-->

## 1. Giới thiệu
![Cloudflare Pages](https://cdn.hashnode.com/res/hashnode/image/upload/v1711217760169/OfI6ARj_Q.jpg?w=800&amp;fit=crop&amp;crop=entropy&amp;auto=compress,format&amp;format=webp)

Bài viết này sẽ hướng dẫn bạn deploy project lên Cloudflare Pages một cách đơn giản và miễn phí. Bên cạnh đó, mình sẽ chia sẻ những tính năng nổi bật nhất của Cloudflare.

# 2. Cloudflare là gì?
Cloudflare là một nền tảng mạng phân phối nội dung (CDN) và bảo mật web phổ biến. Một trong những tính năng nổi bật là **Cloudflare Pages**, cho phép bạn triển khai dự án web tĩnh nhanh chóng, miễn phí.

## 3. Tính năng của Cloudflare Pages
![Cloudflare Pages](https://cdn.hashnode.com/res/hashnode/image/upload/v1711217760169/OfI6ARj_Q.jpg?w=800&amp;fit=crop&amp;crop=entropy&amp;auto=compress,format&amp;format=webp)

- **Tích hợp Git**: Tự động triển khai website mỗi khi push code (GitHub, GitLab, Bitbucket).
- **Analytics**: Thống kê user truy cập, băng thông.
- **Hiệu suất vượt trội**: CDN toàn cầu.
- **Bảo mật cao**: Chống DDoS, bot độc hại.
- **Đa dạng tiện ích**: Redirects, custom domains, environment variables, SEO...
- **Dễ dùng**: Giao diện trực quan, phù hợp cả người mới.
- **Miễn phí**: Đủ cho blog cá nhân, portfolio, landing page.

## 4. Chi phí hosting
Có 3 gói chính: **Free, Pro, Business**. Với dự án cá nhân, gói Free là quá đủ.

## 5. Hướng dẫn deploy

### Điều kiện tiên quyết
- Tài khoản GitHub
- Tài khoản Cloudflare
- Repository chứa project (public hoặc private) hoặc file tĩnh (HTML, CSS, JS)

### Các bước
1. Vào **Workers & Pages → Overview → Create application**
2. Chọn **Pages**
3. Kết nối GitHub repo hoặc upload file tĩnh
4. Chọn branch, framework → Deploy
5. Hoàn tất 🚀

## 6. Tổng kết
Hy vọng bài viết này giúp bạn deploy thành công website với Cloudflare Pages.  
👉 Tài liệu chi tiết: [Cloudflare Pages Docs](https://developers.cloudflare.com/pages/)

Tham khảo thêm:
- Hướng dẫn deploy lên **GitHub Pages**
- Hướng dẫn deploy lên **Netlify**
- Hướng dẫn deploy lên **Vercel**

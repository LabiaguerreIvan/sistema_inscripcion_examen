/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
  
    url_front: 'http://localhost:3000', //url de nuestro frontend
    url_back: 'http://localhost:3015', //url de nuestro backend
    project_title_head: 'Findapp', //titulo que ira en el head
    project_title_topbar: 'Findapp', //titulo que ira en el topbar
    topbar_logo: "/logo_cir.png", //logo que ira en el topbar
  }
};

export default nextConfig;
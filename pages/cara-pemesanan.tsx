import React from "react";

export default function CaraPemesananPage() {
  return (
    <section className="max-w-2xl mx-auto py-12 px-4">
      <h2 className="text-2xl font-bold mb-6 text-center">Cara Pemesanan Produk Diocca</h2>
      <div className="space-y-6 text-lg">
        <div>
          <strong>1. TikTok Shop</strong>
          <p>
            Anda dapat memesan produk Diocca melalui <a href="https://www.tiktok.com/@diocca?_r=1&_t=ZS-91ArPyD3XyG" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">TikTok Shop Diocca</a>. Silakan kunjungi akun TikTok Diocca dan pilih produk yang diinginkan.
          </p>
        </div>
        <div>
          <strong>2. Shopee</strong>
          <p>
            Produk Diocca juga tersedia di <a href="https://shopee.co.id/diocca.id?fbclid=PAb21jcAN5gilleHRuA2FlbQIxMQBzcnRjBmFwcF9pZA81NjcwNjczNDMzNTI0MjcAAaenbSoGcLfSdECT5dJrPBVYrcLdDZH4SYpEJH2t74YvtYeKZH_8FshBI1STYg_aem_ofU9f1iqXaqF42f0qq1WSg" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:underline">Shopee Diocca</a>. Klik link tersebut untuk langsung menuju toko resmi Diocca di Shopee.
          </p>
        </div>
        <div>
          <strong>3. WhatsApp</strong>
          <p>
            Anda juga bisa memesan langsung melalui WhatsApp dengan menghubungi nomor
            <a
              href="https://wa.me/6282110004601?text=Halo%20ka%2C%20saya%20mau%20memesan%20produk%20susu%20DIOCCA"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline font-bold"
            >
              <br />082110004601
            </a>
            <span className="ml-1"> (klik nomor wa ini untuk langsung chat ke wa DIOCCA)</span>
          </p>
          <div className="my-4">
            <span className="inline-block mt-2">Pesan otomatis: <span className="bg-gray-100 px-2 py-1 rounded">"Halo ka, saya mau memesan produk susu DIOCCA"</span></span>
          </div>
      </div>
      </div>
    </section>
  );
}

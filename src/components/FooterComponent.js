'use client'

import "../css/app.css"
import "../css/globals.css"

import React from "react";
import swal from "sweetalert";

const FooterComponent = () => {
    const termsHeader = "Telif Hakları Hüküm ve Koşulları"
    const terms = "MAS Global Spółka z o.o. ve Atlantic Valley Markası web sitesinde yer alan her türlü metin, grafik, logo, resim, ses, animasyon, videolar ve diğer materyaller ('Site Materyalleri'), MAS Global Spółka z o.o. ve Atlantic Valley Markası tarafından telif hakkı koruması altındadır. Bu Site Materyalleri, MAS Global Spółka z o.o. ve Atlantic Valley Markası'nın önceden yazılı izni olmadan kullanılamaz, çoğaltılamaz, dağıtılamaz, değiştirilemez, yayınlanamaz, sergilenemez, satılamaz veya başka bir şekilde ticari amaçla kullanılamaz. MAS Global Spółka z o.o. ve Atlantic Valley Markası web sitesi ziyaretçileri, Site Materyallerini sadece kişisel, gayri ticari amaçlarla kullanabilirler. Site Materyallerini kopyalamadan önce, MAS Global Spółka z o.o. ve Atlantic Valley Markası'nın yazılı izni alınmalıdır. MAS Global Spółka z o.o. ve Atlantic Valley Markası web sitesinde yer alan herhangi bir Site Materyali, başka bir web sitesinde veya başka bir elektronik medyada kullanılamaz.Telif hakkı ihlali davranışları, MAS Global Spółka z o.o. ve Atlantic Valley Markası tarafından ciddiye alınacaktır ve hukuki işlemler başlatılabilir.MAS Global Spółka z o.o. ve Atlantic Valley Markası web sitesi, üçüncü taraf web sitelerine bağlantılar içerebilir. Bu web siteleri, MAS Global Spółka z o.o. ve Atlantic Valley Markası'nın kontrolü altında değildir ve MAS Global Spółka z o.o. ve Atlantic Valley Markası bu web sitelerinin içerikleri veya gizlilik politikaları hakkında hiçbir sorumluluk kabul etmez.MAS Global Spółka z o.o. ve Atlantic Valley Markası, bu Telif Hakları Hüküm ve Koşullarını değiştirme hakkını saklı tutar. Bu nedenle, MAS Global Spółka z o.o. ve Atlantic Valley Markası web sitesini ziyaret etmeden önce, bu metni tekrar okumanız önerilir.Bu Telif Hakları Hüküm ve Koşulları, MAS Global Spółka z o.o. ve Atlantic Valley Markası web sitesinin tüm kullanıcıları için geçerlidir. Herhangi bir soru veya endişeniz varsa, lütfen MAS Global Spółka z o.o. ve Atlantic Valley Markası'ya e-posta veya telefon yoluyla ulaşın."

    return (
        <center>
            <h2 className="text-slate-500 lg:text-sm md:text-sm sm:text-xs text-xs">
            ©{new Date().getFullYear()} Atlantic Valley & Partners
            Tüm Hakları Saklıdır | Bu Siteyi Ziyaret Ederek <strong className="text-slate-400 hover:text-white transition-all duration-300 cursor-pointer" onClick={() => {swal({title: termsHeader, text: terms})}}>Hüküm Ve Koşullar</strong>ı Kabul Etmiş Olursunuz
            </h2>
        </center>
      )
}

export default FooterComponent;
"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";


const products = [

  {
    name:"City Bee",
    image:"/images/hero-cover.png",
    slug:"city-bee"
  },

  {
    name:"Toro",
    image:"/images/products/toro/toro.png",
    slug:"toro"
  }

];




export default function HomeProducts(){


return (

<section
className="
relative
bg-black
text-white
py-32
"
>


<div
className="
max-w-7xl
mx-auto
px-6
md:px-12
"
>


{/* BAŞLIK */}


<div
className="
mb-20
"
>


<p
className="
text-white/30
text-xs
tracking-[0.6em]
uppercase
mb-6
"
>
AKESO MOTORS
</p>



<h2
className="
text-5xl
md:text-7xl
font-semibold
tracking-tight
"
>
Öne Çıkan
<br/>
Modeller
</h2>



</div>







{/* ARAÇLAR */}


<div
className="
grid
md:grid-cols-2
gap-10
"
>


{
products.map((product)=>(


<Link

key={product.slug}

href={`/urunler/${product.slug}`}

className="
group
relative
h-[520px]
md:h-[620px]
rounded-[2.5rem]
border
border-white/10
overflow-hidden
bg-white/[0.02]
hover:border-white/30
transition-all
duration-500
"

>



{/* IŞIK */}

<div
className="
absolute
inset-0
bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.15),transparent_55%)]
"
/>






{/* MODEL */}


<div
className="
absolute
top-10
left-10
z-20
"
>


<p
className="
text-white/30
text-xs
tracking-[0.5em]
uppercase
"
>
ELEKTRİKLİ
</p>



<h3
className="
text-4xl
md:text-5xl
font-semibold
mt-4
"
>
{product.name}
</h3>


</div>







{/* ARAÇ */}


<motion.div

animate={{
y:[0,-8,0]
}}

transition={{
duration:5,
repeat:Infinity,
ease:"easeInOut"
}}

className="
absolute
inset-0
"
>


<Image

src={product.image}

alt={product.name}

fill

className="
object-contain
p-10
transition-transform
duration-700
group-hover:scale-110
"

/>


</motion.div>








{/* ALT */}


<div

className="
absolute
bottom-10
left-10
right-10
flex
justify-between
items-center
z-20
"

>


<span
className="
text-white/40
text-sm
"
>
{product.name}'i keşfet
</span>



<span
className="
text-2xl
transition-transform
duration-300
group-hover:translate-x-3
"
>
→
</span>



</div>




</Link>


))
}



</div>







<div
className="
mt-14
text-center
"
>


<Link

href="/urunler"

className="
text-white/40
hover:text-white
transition
"

>
Tüm ürünleri görüntüle →
</Link>


</div>




</div>


</section>

);


}
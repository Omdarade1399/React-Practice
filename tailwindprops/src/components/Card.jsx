import React from 'react'

function Card({username, profession, description}) {
  return (
    <figure className="bg-slate-100 rounded-xl p-8 dark:bg-slate-800 m-4">
  <img className="w-20 h-25 rounded-3xl mx-auto" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVEGS2W5_HBSbPL80fd98hvm_b0mlPGHGuyaOjp_n__VNU1SOlOmo2Ivt6rY1kMR4vGbo&usqp=CAU" alt="" width="384" height="512" />
  <div className="pt-6 space-y-4">
    <blockquote>
      <p className="text-lg font-medium">
        {description}
      </p>
    </blockquote>
    <figcaption className="font-medium">
      <div>
        {username}
      </div>
      <div>
        {profession}
      </div>
    </figcaption>
  </div>
</figure>
  )
}

export default Card
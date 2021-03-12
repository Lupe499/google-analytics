import TestimonialCard from "./TestimonialCard"
import "./Testimonials.scss"


function Testimonials() {
  return(
    <section className="testimonials">
      <TestimonialCard 
        image="https://picsum.photos/300/300?random=1"
        copy="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga nesciunt sint tempore illum? Deserunt nemo, laborum est blanditiis architecto magnam, id aspernatur unde fuga eos veniam necessitatibus ipsa veritatis laudantium?" />
      <TestimonialCard 
        image="https://picsum.photos/300/300?random=2"
        copy="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga nesciunt sint tempore illum? Deserunt nemo, laborum est blanditiis architecto magnam, id aspernatur unde fuga eos veniam necessitatibus ipsa veritatis laudantium?" />
      <TestimonialCard 
        image="https://picsum.photos/300/300?random=3"
        copy="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga nesciunt sint tempore illum? Deserunt nemo, laborum est blanditiis architecto magnam, id aspernatur unde fuga eos veniam necessitatibus ipsa veritatis laudantium?" />
    </section>
  )
}

export default Testimonials;
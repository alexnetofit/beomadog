export interface TestimonialVideo {
  id: string;
  src: string;
  poster: string;
  label: string;
}

export const testimonialVideos: TestimonialVideo[] = [
  {
    id: "depo-01",
    src: "/videos/testimonials/depo-01.mp4",
    poster: "/videos/testimonials/depo-01-poster.jpg",
    label: "Depoimento 1",
  },
  {
    id: "depo-02",
    src: "/videos/testimonials/depo-02.mp4",
    poster: "/videos/testimonials/depo-02-poster.jpg",
    label: "Depoimento 2",
  },
  {
    id: "depo-03",
    src: "/videos/testimonials/depo-03.mp4",
    poster: "/videos/testimonials/depo-03-poster.jpg",
    label: "Depoimento 3",
  },
  {
    id: "depo-04",
    src: "/videos/testimonials/depo-04.mp4",
    poster: "/videos/testimonials/depo-04-poster.jpg",
    label: "Depoimento 4",
  },
];

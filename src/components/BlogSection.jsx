import { FaArrowRight } from "react-icons/fa6";
import { useI18n } from "../i18n";

function formatDate(dateStr) {
  if (!dateStr) return "";
  return new Date(`${dateStr}T00:00:00`).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function BlogSection({ posts }) {
  const { data } = useI18n();
  const { BLOGS } = data;
  return (
    <section className="blog-section-wrapper section-padding-ptb-70" data-reveal>
      <div className="container-gb">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="section-header mb-3 md:mb-0">
            <h2>{BLOGS.title}</h2>
            <p>{BLOGS.description}</p>
          </div>
          <a
            href={BLOGS.allUrl}
            className="inline-flex shrink-0 items-center gap-2 text-[18px] font-bold text-ink-gb transition-colors hover:text-primary-gb"
          >
            <span className="btn-label">{BLOGS.showAll}</span>
            <span className="btn-icon text-[18px]">
              <FaArrowRight aria-hidden="true" />
            </span>
          </a>
        </div>

        <div className="section-margin-mt-50">
          <div className="flex flex-wrap gap-6">
            {posts.map((post, i) => (
              <div key={post.id} className="w-full md:w-[calc(50%-12px)] xl:w-[calc(33.333%-16px)]">
                <a
                  href={`/blogs/${post.slug}`}
                  className="group block h-full overflow-hidden rounded-[16px] bg-card-gb transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_30px_60px_-30px_rgba(14,82,255,0.45)]"
                  data-reveal
                  data-delay={String(i * 0.1)}
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      loading="lazy"
                      className="h-[220px] w-full object-cover transition-transform duration-700 group-hover:scale-[1.06] md:h-[260px]"
                    />
                    <span
                      aria-hidden="true"
                      className="absolute right-5 top-5 inline-flex h-11 w-11 -translate-y-2 items-center justify-center rounded-full bg-white/90 text-primary-gb opacity-0 shadow-lg transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100"
                    >
                      <FaArrowRight />
                    </span>
                  </div>
                  <div className="p-6 md:p-7">
                    <span className="text-[16px] font-medium leading-5 text-muted-gb">
                      {formatDate(post.date)}
                    </span>
                    <h3 className="mt-3 line-clamp-2 text-[22px] font-semibold leading-[1.4] text-ink-gb transition-colors duration-300 group-hover:text-primary-gb">
                      {post.title}
                    </h3>
                    <p className="mt-3 line-clamp-2 text-[16px] font-normal leading-6 text-muted-gb">
                      {post.subtitle}
                    </p>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
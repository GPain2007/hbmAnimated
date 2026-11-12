import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";

import ImageViewer from "../components/imagesviewer/ImageViewer";
import Links from "../components/siderbar/links/Links";
import { TestmonialData } from "../components/testimonial/ImageData";
import { ImageData } from "../components/carousel/ImageData";

describe("Portfolio lightbox", () => {
  it("renders a grid of photos", () => {
    const { container } = render(<ImageViewer />);
    const photos = container.querySelectorAll(".gallery-grid img");
    expect(photos.length).toBeGreaterThan(0);
  });

  it("opens on click, steps forward and back, and closes", () => {
    const { container } = render(<ImageViewer />);
    const photos = container.querySelectorAll(".gallery-grid img");
    const first = photos[0].getAttribute("src");
    const second = photos[1].getAttribute("src");
    const last = photos[photos.length - 1].getAttribute("src");

    fireEvent.click(photos[0]);
    const lightboxImage = () => screen.getByAltText("lightbox image");
    expect(lightboxImage()).toHaveAttribute("src", first);

    fireEvent.click(container.querySelector(".lightbox-next"));
    expect(lightboxImage()).toHaveAttribute("src", second);

    fireEvent.click(container.querySelector(".lightbox-prev"));
    fireEvent.click(container.querySelector(".lightbox-prev"));
    expect(lightboxImage()).toHaveAttribute("src", last); // wraps around

    fireEvent.click(container.querySelector(".lightbox-close"));
    expect(screen.queryByAltText("lightbox image")).not.toBeInTheDocument();
  });
});

describe("Menu links", () => {
  it("links to every page", () => {
    render(<Links />);
    const expected = {
      Home: "/",
      Offerings: "/offerings",
      Portfolio: "/gallery",
      Contact: "/contact",
    };
    for (const [name, href] of Object.entries(expected)) {
      expect(screen.getByRole("link", { name })).toHaveAttribute("href", href);
    }
  });
});

describe("Content data", () => {
  it("has testimonials with a quote and an author", () => {
    expect(TestmonialData.length).toBeGreaterThan(0);
    for (const t of TestmonialData) {
      expect(t.quote.trim()).not.toBe("");
      expect(t.author.trim()).not.toBe("");
    }
  });

  it("has carousel images with unique ids", () => {
    const ids = ImageData.map((img) => img.id);
    expect(new Set(ids).size).toBe(ids.length);
    for (const img of ImageData) {
      expect(img.src).toBeTruthy();
    }
  });
});

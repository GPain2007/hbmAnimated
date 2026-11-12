import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, it, expect } from "vitest";

import Home from "../pages/home/Home";
import Offerings from "../pages/offerings/Offerings";
import Gallery from "../pages/gallery/Gallery";
import Contact from "../pages/contact/Contact";

const renderPage = (Page) =>
  render(
    <MemoryRouter>
      <Page />
    </MemoryRouter>
  );

describe("Home page", () => {
  it("shows the brand, testimonials and the wedding process", () => {
    renderPage(Home);
    expect(
      screen.getByRole("heading", { name: "HBM Flower City" })
    ).toBeInTheDocument();
    expect(screen.getByText("Kind Words")).toBeInTheDocument();
    expect(screen.getByText("Our Process For Weddings")).toBeInTheDocument();
    for (const step of ["Inquiry", "Proposal", "Booking", "Final Details"]) {
      expect(screen.getByRole("heading", { name: step })).toBeInTheDocument();
    }
  });

  it("links the Inquire button to the offerings page", () => {
    renderPage(Home);
    const inquire = screen.getByRole("button", { name: "Inquire" });
    expect(inquire.closest("a")).toHaveAttribute("href", "/offerings");
  });

  it("shows the contact email in the footer", () => {
    renderPage(Home);
    expect(
      screen.getByRole("link", { name: /hello@hbmflower-city\.com/ })
    ).toHaveAttribute("href", "mailto:hello@hbmflower-city.com");
  });
});

describe("Offerings page", () => {
  it("lists the three offerings and the starting price", () => {
    renderPage(Offerings);
    expect(
      screen.getByRole("heading", { name: "Full-Service Events" })
    ).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /A La Carte/ })).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "Custom Offerings" })
    ).toBeInTheDocument();
    expect(screen.getByText("Beginning at $3500")).toBeInTheDocument();
  });

  it("answers where the studio services", () => {
    renderPage(Offerings);
    expect(screen.getByText(/We are based in Austin/)).toBeInTheDocument();
  });
});

describe("Gallery page", () => {
  it("shows the portfolio title", () => {
    renderPage(Gallery);
    expect(screen.getByRole("heading", { name: "Portfolio" })).toBeInTheDocument();
  });
});

describe("Contact page", () => {
  it("embeds the inquiry form and shows the contact email", () => {
    const { container } = renderPage(Contact);
    expect(
      screen.getByRole("heading", { name: "Wedding, Events & More" })
    ).toBeInTheDocument();
    const iframe = container.querySelector("iframe");
    expect(iframe).not.toBeNull();
    expect(iframe.getAttribute("src")).toContain("dubsado.com");
  });
});

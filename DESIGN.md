---
name: Wireframe Professional
colors:
  surface: '#f8f9fb'
  surface-dim: '#d9dadc'
  surface-bright: '#f8f9fb'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f4f6'
  surface-container: '#edeef0'
  surface-container-high: '#e7e8ea'
  surface-container-highest: '#e1e2e4'
  on-surface: '#191c1e'
  on-surface-variant: '#45464c'
  inverse-surface: '#2e3132'
  inverse-on-surface: '#f0f1f3'
  outline: '#76777d'
  outline-variant: '#c6c6cd'
  surface-tint: '#575e70'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#141b2b'
  on-primary-container: '#7d8497'
  inverse-primary: '#c0c6db'
  secondary: '#585f6c'
  on-secondary: '#ffffff'
  secondary-container: '#dce2f3'
  on-secondary-container: '#5e6572'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#261906'
  on-tertiary-container: '#968065'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dce2f7'
  primary-fixed-dim: '#c0c6db'
  on-primary-fixed: '#141b2b'
  on-primary-fixed-variant: '#404758'
  secondary-fixed: '#dce2f3'
  secondary-fixed-dim: '#c0c7d6'
  on-secondary-fixed: '#151c27'
  on-secondary-fixed-variant: '#404754'
  tertiary-fixed: '#f9debf'
  tertiary-fixed-dim: '#dcc2a4'
  on-tertiary-fixed: '#261906'
  on-tertiary-fixed-variant: '#55442d'
  background: '#f8f9fb'
  on-background: '#191c1e'
  surface-variant: '#e1e2e4'
typography:
  display:
    fontFamily: Inter
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.5'
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '500'
    lineHeight: '1.4'
    letterSpacing: 0.01em
  mono-sm:
    fontFamily: monospace
    fontSize: 13px
    fontWeight: '400'
    lineHeight: '1.5'
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1120px
  gutter: 24px
  margin-desktop: 64px
  margin-mobile: 20px
  section-gap: 128px
  stack-sm: 8px
  stack-md: 16px
  stack-lg: 32px
---

## Brand & Style

This design system is built for the high-level backend engineer, emphasizing architectural clarity over decorative flair. The brand personality is "Transparently Technical"—it reveals the underlying structure of the work rather than hiding it behind aesthetic masks. 

The design style utilizes **Minimalism** with a **Structuralist** twist. It mimics the precision of a high-fidelity wireframe to signal a focus on logic, data flow, and system design. By stripping away color and ornamentation, the interface prioritizes scannability for recruiters and engineering managers who value technical depth and organized documentation. The emotional response is one of professional trust, rigorous organization, and intellectual honesty.

## Colors

The palette is strictly grayscale, leveraging the pre-selected seed color `#111827` (Deep Slate) as the anchor for primary text and high-contrast actions. 

- **Primary:** `#111827` is used for headlines, active states, and primary CTA backgrounds to ensure maximum legibility and authority.
- **Secondary:** Medium grays are reserved for metadata, labels, and supporting text to create a clear information hierarchy.
- **Surface & Stroke:** The system relies on a white surface with light gray borders (`#E5E7EB`) to define boundaries. 
- **Accent:** Background washes of `#F3F4F6` are used for code blocks or secondary section containers to subtly differentiate content zones without introducing hue.

## Typography

The typography system uses **Inter** to maintain a systematic, utilitarian aesthetic. The hierarchy is intentionally dramatic to help readers quickly distinguish between project titles, technical specs, and narrative descriptions.

- **Display & Headlines:** Use tight letter-spacing and bold weights to anchor the page.
- **Body:** Set with generous line height to ensure long-form technical explanations remain readable.
- **Mono:** A fallback monospace font is introduced specifically for technical parameters, terminal snippets, and version numbers, reinforcing the backend engineer persona.

## Layout & Spacing

The design system follows a rigorous **8px grid** to ensure mathematical consistency. 

- **Desktop:** A 12-column fluid grid within a 1120px max-width container. Featured projects should span 8-12 columns, while secondary items or technical specs span 4 or 6.
- **Mobile:** A single-column layout with 20px margins.
- **Philosophy:** Whitespace is treated as a structural element. "Generous breathing room" is enforced with a 128px gap between major sections to prevent the "developer template" look and allow the recruiter to focus on one project at a time.

## Elevation & Depth

To maintain the "Wireframe Professional" look, this design system avoids shadows. Depth is communicated through **Tonal Layers** and **Stroke Weight**:

- **Level 0 (Base):** White background.
- **Level 1 (Containers):** Defined by a 1px solid stroke (`#E5E7EB`).
- **Level 2 (Active/Hover):** Surfaces transition to a very light gray (`#F9FAFB`) or increase stroke weight to 2px.
- **Diagrams:** Architecture diagrams should use the same grayscale stroke-based language, avoiding fills where possible to emphasize logic flow over visual density.

## Shapes

The shape language is conservative and precise. A **Soft (1)** roundedness level (0.25rem) is applied to all interactive elements to prevent the design from feeling overly aggressive or "brutalist."

- **Cards & Inputs:** 4px (0.25rem) border radius.
- **Buttons:** 4px (0.25rem) border radius for a standard professional look.
- **Diagram Nodes:** Rectilinear with 4px radius to maintain consistency with the UI components.

## Components

### Navbar
Minimalist and fixed-top. Features the engineer's name in `label-md` bold on the left, and simple text-link navigation on the right. No background blur; use a solid white background with a 1px bottom stroke.

### Project Cards
- **Featured:** Spans the full grid width. Layout is split: 60% for a placeholder "Technical Architecture Diagram" and 40% for text (Title, Tech Stack Chips, and a 2-sentence impact statement).
- **Secondary:** Grid-based cards with a simple 1px stroke. Includes project title, a list of technologies, and a "View Source" link.

### Buttons & Chips
- **Primary CTA:** Solid `#111827` background with white text. High contrast, no icons unless essential (e.g., a simple arrow).
- **Secondary CTA:** 1px stroke with transparent background.
- **Tech Chips:** Small, grayscale capsules using `mono-sm` type. Use a light gray background (`#F3F4F6`) with no border.

### Placeholders
- **Photos:** Grayscale, high-contrast headshots only.
- **Diagrams:** Use a "Blueprint" style—light gray background, white strokes, and monospaced labels to indicate system architecture (S3, EC2, K8s, etc.).

### Lists
Technical skills should be displayed in multi-column lists with `label-md` headers and `body-md` items, separated by subtle 1px horizontal dividers.
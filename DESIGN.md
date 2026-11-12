# DestinoVibe — Design System

## Direction

“Brazilian modernism meets a travel journal”: cinematic photography, quiet confidence, generous whitespace and warm, human copy. The interface should feel curated rather than packaged.

## Foundations

- **Palette:** deep Atlantic `#102F2B`, sea-glass `#BFD6CB`, warm sand `#F4EFE5`, sun `#E7A64A`, ink `#17211F`, coral `#D96C52`.
- **Typography:** `Manrope`-style geometric sans for interface and copy; `Cormorant Garamond`-style editorial serif for display. System fallbacks preserve performance.
- **Spacing:** 4, 8, 12, 16, 24, 32, 48, 72, 96 and 128px. Sections use fluid `clamp()` spacing.
- **Radius:** 12px controls, 24px cards, 999px pills. Photography uses editorial asymmetric crops.
- **Shadow:** low-opacity, wide ambient shadows only. Borders carry most hierarchy.

## Components

- Buttons have 48px minimum height, strong focus rings and clear primary/secondary contrast.
- Cards are image-led and avoid repeated “floating box” styling. Metadata stays compact.
- Forms use persistent labels, plain-language errors and large touch targets.
- Navigation becomes a Radix dialog on compact screens.

## Motion

- Motion clarifies entry, hover and step changes; it never blocks interaction.
- Typical duration is 220–600ms with natural easing.
- `prefers-reduced-motion` removes smooth scrolling and decorative transforms.

## Imagery

Destination photography is editorial inspiration, not proof of DestinoVibe customer trips. Images are loaded from Unsplash with creator/source attribution in the interface.

## Accessibility

Semantic regions, skip link, visible focus, keyboard-operable dialogs, 44px+ touch targets, descriptive alternative text and color contrast designed toward WCAG 2.2 AA.

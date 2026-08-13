export const GALLERY_FILTERS = [
  { key: 'all', label: 'All' },
  { key: 'foundation', label: 'Foundation Course' },
  { key: 'teachers', label: 'Teachers Photos' },
  { key: 'events', label: 'Event Photos' },
];

export const GALLERY_ITEMS = [
  { file: 'foundation-course-1.jpg', cat: 'foundation', title: 'Foundation Course', label: 'Foundation Course' },
  { file: 'foundation-course-2-scaled.jpg', cat: 'foundation', title: 'Foundation Course', label: 'Foundation Course' },
  { file: 'foundation-course-4-scaled.jpg', cat: 'foundation', title: 'Foundation Course', label: 'Foundation Course' },
  { file: 'ASR-Ayya-Teacher.jpg', cat: 'teachers', title: 'ASR Ayya Teacher', label: 'Teachers Photos' },
  { file: 'Nagarajan-Ayya-Teacher.jpg', cat: 'teachers', title: 'Nagarajan Ayya Teacher', label: 'Teachers Photos' },
  { file: 'event-photos-1-scaled.jpg', cat: 'events', title: 'Event Photos', label: 'Event Photos' },
  { file: 'event-photos-4-scaled.jpg', cat: 'events', title: 'Event Photos', label: 'Event Photos' },
  { file: 'event-photos-7-scaled.jpg', cat: 'events', title: 'Event Photos', label: 'Event Photos' },
  { file: 'event-photos-10-scaled.jpg', cat: 'events', title: 'Event Photos', label: 'Event Photos' },
  { file: 'event-photos-15-scaled.jpg', cat: 'events', title: 'Event Photos', label: 'Event Photos' },
  { file: 'event-photos-18-scaled.jpg', cat: 'events', title: 'Event Photos', label: 'Event Photos' },
  { file: 'event-photos-16-scaled.jpg', cat: 'events', title: 'Event Photos', label: 'Event Photos' },
  { file: 'event-photos-20-scaled.jpg', cat: 'events', title: 'Event Photos', label: 'Event Photos' },
  { file: 'event-photos-19-scaled.jpg', cat: 'events', title: 'Event Photos', label: 'Event Photos' },
  { file: 'event-photos-21-scaled.jpg', cat: 'events', title: 'Event Photos', label: 'Event Photos' },
  { file: 'event-photos-39-scaled.jpg', cat: 'events', title: 'Event Photos', label: 'Event Photos' },
  { file: 'event-photos-23-scaled.jpg', cat: 'events', title: 'Event Photos', label: 'Event Photos' },
  { file: 'event-photos-43-scaled.jpg', cat: 'events', title: 'Event Photos', label: 'Event Photos' },
  { file: 'event-photos-45-scaled.jpg', cat: 'events', title: 'Event Photos', label: 'Event Photos' },
  { file: 'event-photos-47-scaled.jpg', cat: 'events', title: 'Event Photos', label: 'Event Photos' },
  { file: 'event-photos-48-scaled.jpg', cat: 'events', title: 'Event Photos', label: 'Event Photos' },
  { file: 'event-photos-50-scaled.jpg', cat: 'events', title: 'Event Photos', label: 'Event Photos' },
  { file: 'event-photos-49-scaled.jpg', cat: 'events', title: 'Event Photos', label: 'Event Photos' },
  { file: 'event-photos-52-scaled.jpg', cat: 'events', title: 'Event Photos', label: 'Event Photos' },
  { file: 'event-photos-54-scaled.jpg', cat: 'events', title: 'Event Photos', label: 'Event Photos' },
  { file: 'event-photos-57-scaled.jpg', cat: 'events', title: 'Event Photos', label: 'Event Photos' },
  { file: 'sept-event-2025-4.jpg', cat: 'events', title: 'September Event 2025', label: 'Event Photos' },
  { file: 'sept-event-2025-2.jpg', cat: 'events', title: 'September Event 2025', label: 'Event Photos' },
  { file: 'sept-event-2025-3.jpg', cat: 'events', title: 'September Event 2025', label: 'Event Photos' },
  { file: 'sept-event-2025-1.jpg', cat: 'events', title: 'September Event 2025', label: 'Event Photos' },
];

export function gallerySrc(file) {
  return `/assets/images/vetham/gallery/${file}`;
}

INSERT INTO public.youtube_channel (id, channel_name) VALUES (1, '양반코딩');
INSERT INTO public.youtube_channel (id, channel_name) VALUES (2, '양반먹방');
INSERT INTO public.video (id, title, youtube_channel_id) VALUES (1, 'html 강의', 1);
INSERT INTO public.video (id, title, youtube_channel_id) VALUES (2, 'css 강의', 1);
INSERT INTO public.video (id, title, youtube_channel_id) VALUES (3, 'javascript 강의', 1);
INSERT INTO public.video (id, title, youtube_channel_id) VALUES (4, '치킨 먹방', 2);
INSERT INTO public.video (id, title, youtube_channel_id) VALUES (5, '국밥 먹방', 2);
SELECT pg_catalog.setval('public.video_id_seq', 5, true);
SELECT pg_catalog.setval('public.youtube_channel_id_seq', 2, true);

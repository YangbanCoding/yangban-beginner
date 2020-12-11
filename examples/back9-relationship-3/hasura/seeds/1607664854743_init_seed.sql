INSERT INTO public.video (id, title) VALUES (1, '코딩 강의 영상');
INSERT INTO public.video (id, title) VALUES (2, '헬스 영상');
INSERT INTO public.video (id, title) VALUES (3, '먹방 영상');
INSERT INTO public.video (id, title) VALUES (4, '요리 영상');
INSERT INTO public.youtube_channel (id, channel_name) VALUES (1, '유저1');
INSERT INTO public.youtube_channel (id, channel_name) VALUES (2, '유저2');
INSERT INTO public.youtube_channel (id, channel_name) VALUES (3, '유저3');
INSERT INTO public.like_video (id, video_id, youtube_channel_id) VALUES (1, 1, 1);
INSERT INTO public.like_video (id, video_id, youtube_channel_id) VALUES (2, 2, 1);
INSERT INTO public.like_video (id, video_id, youtube_channel_id) VALUES (3, 2, 2);
INSERT INTO public.like_video (id, video_id, youtube_channel_id) VALUES (4, 3, 2);
INSERT INTO public.like_video (id, video_id, youtube_channel_id) VALUES (5, 3, 3);
INSERT INTO public.like_video (id, video_id, youtube_channel_id) VALUES (6, 4, 3);
SELECT pg_catalog.setval('public.like_video_id_seq', 6, true);
SELECT pg_catalog.setval('public.video_id_seq', 4, true);
SELECT pg_catalog.setval('public.youtube_channel_id_seq', 3, true);

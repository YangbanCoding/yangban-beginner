INSERT INTO public.google_account (id, email, birthday, sex, phone_number) VALUES (1, 'yangbancoding@gmail.com', '19200505', 'male', '01112341234');
INSERT INTO public.youtube_channel (channel_name, id, subscribers, google_acount_id) VALUES ('양반코딩', 1, 11, 1);
SELECT pg_catalog.setval('public.google_account_id_seq', 1, true);
SELECT pg_catalog.setval('public.youtube_channel_id_seq', 1, true);

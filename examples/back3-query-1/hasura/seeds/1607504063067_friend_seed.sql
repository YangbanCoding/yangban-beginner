INSERT INTO public.friend (id, name, height, weight) VALUES (1, '가렌', 180, 90);
INSERT INTO public.friend (id, name, height, weight) VALUES (2, '갈리오', 200, 300);
INSERT INTO public.friend (id, name, height, weight) VALUES (3, '갱플랭크', 170, 70);
SELECT pg_catalog.setval('public.friend_id_seq', 3, true);

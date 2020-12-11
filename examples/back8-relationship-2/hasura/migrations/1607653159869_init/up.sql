CREATE TABLE public.video (
    id integer NOT NULL,
    title text NOT NULL,
    youtube_channel_id integer
);
CREATE SEQUENCE public.video_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public.video_id_seq OWNED BY public.video.id;
CREATE TABLE public.youtube_channel (
    id integer NOT NULL,
    channel_name text NOT NULL
);
CREATE SEQUENCE public.youtube_channel_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public.youtube_channel_id_seq OWNED BY public.youtube_channel.id;
ALTER TABLE ONLY public.video ALTER COLUMN id SET DEFAULT nextval('public.video_id_seq'::regclass);
ALTER TABLE ONLY public.youtube_channel ALTER COLUMN id SET DEFAULT nextval('public.youtube_channel_id_seq'::regclass);
ALTER TABLE ONLY public.video
    ADD CONSTRAINT video_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.youtube_channel
    ADD CONSTRAINT youtube_channel_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.video
    ADD CONSTRAINT video_youtube_channel_id_fkey FOREIGN KEY (youtube_channel_id) REFERENCES public.youtube_channel(id) ON UPDATE RESTRICT ON DELETE RESTRICT;

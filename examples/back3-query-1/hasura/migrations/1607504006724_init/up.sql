CREATE TABLE public.friend (
    id integer NOT NULL,
    name text NOT NULL,
    height integer NOT NULL,
    weight integer NOT NULL
);
CREATE SEQUENCE public.friend_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public.friend_id_seq OWNED BY public.friend.id;
ALTER TABLE ONLY public.friend ALTER COLUMN id SET DEFAULT nextval('public.friend_id_seq'::regclass);
ALTER TABLE ONLY public.friend
    ADD CONSTRAINT friend_pkey PRIMARY KEY (id);

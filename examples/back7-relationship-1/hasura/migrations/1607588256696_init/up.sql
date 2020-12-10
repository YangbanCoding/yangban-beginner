CREATE FUNCTION public.set_current_timestamp_updated_at() RETURNS trigger
    LANGUAGE plpgsql
    AS $$
DECLARE
  _new record;
BEGIN
  _new := NEW;
  _new."updated_at" = NOW();
  RETURN _new;
END;
$$;
CREATE TABLE public.google_account (
    id integer NOT NULL,
    email text NOT NULL,
    birthday text NOT NULL,
    sex text NOT NULL,
    phone_number integer NOT NULL
);
CREATE SEQUENCE public.google_account_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public.google_account_id_seq OWNED BY public.google_account.id;
CREATE TABLE public.youtube_channel (
    channel_name text NOT NULL,
    id integer NOT NULL,
    subscribers integer NOT NULL,
    google_acount_id integer
);
CREATE SEQUENCE public.youtube_channel_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public.youtube_channel_id_seq OWNED BY public.youtube_channel.id;
ALTER TABLE ONLY public.google_account ALTER COLUMN id SET DEFAULT nextval('public.google_account_id_seq'::regclass);
ALTER TABLE ONLY public.youtube_channel ALTER COLUMN id SET DEFAULT nextval('public.youtube_channel_id_seq'::regclass);
ALTER TABLE ONLY public.google_account
    ADD CONSTRAINT google_account_email_key UNIQUE (email);
ALTER TABLE ONLY public.google_account
    ADD CONSTRAINT google_account_phone_number_key UNIQUE (phone_number);
ALTER TABLE ONLY public.google_account
    ADD CONSTRAINT google_account_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.youtube_channel
    ADD CONSTRAINT youtube_channel_google_acount_id_key UNIQUE (google_acount_id);
ALTER TABLE ONLY public.youtube_channel
    ADD CONSTRAINT youtube_channel_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.youtube_channel
    ADD CONSTRAINT youtube_channel_google_acount_id_fkey FOREIGN KEY (google_acount_id) REFERENCES public.google_account(id) ON UPDATE RESTRICT ON DELETE RESTRICT;

--
-- PostgreSQL database dump
--

-- Dumped from database version 14.5 (Ubuntu 14.5-0ubuntu0.22.04.1)
-- Dumped by pg_dump version 14.5 (Ubuntu 14.5-0ubuntu0.22.04.1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: election; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.election (
    constituency_id integer NOT NULL,
    start_date date,
    end_date date,
    details text,
    type character varying(255),
    admin_id integer
);


ALTER TABLE public.election OWNER TO postgres;

--
-- Name: election_admin; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.election_admin (
    admin_id integer NOT NULL,
    name text
);


ALTER TABLE public.election_admin OWNER TO postgres;

--
-- Name: voter; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.voter (
    constituency_id integer,
    name text,
    voter_id character(10) NOT NULL,
    date_of_birth date,
    sex character(1),
    address text,
    constituency_name text
);


ALTER TABLE public.voter OWNER TO postgres;

--
-- Data for Name: election; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.election (constituency_id, start_date, end_date, details, type, admin_id) FROM stdin;
\.


--
-- Data for Name: election_admin; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.election_admin (admin_id, name) FROM stdin;
\.


--
-- Data for Name: voter; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.voter (constituency_id, name, voter_id, date_of_birth, sex, address, constituency_name) FROM stdin;
\.


--
-- Name: election_admin election_admin_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.election_admin
    ADD CONSTRAINT election_admin_pkey PRIMARY KEY (admin_id);


--
-- Name: election election_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.election
    ADD CONSTRAINT election_pkey PRIMARY KEY (constituency_id);


--
-- Name: voter voter_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.voter
    ADD CONSTRAINT voter_pkey PRIMARY KEY (voter_id);


--
-- PostgreSQL database dump complete
--


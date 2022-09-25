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
-- Name: candidate; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.candidate (
    candidate_id integer NOT NULL,
    sex character(1),
    name text,
    age integer,
    constituency_id integer,
    constituency_name character varying(255),
    party character varying(255),
    election_id integer
);


ALTER TABLE public.candidate OWNER TO postgres;

--
-- Name: election; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.election (
    election_id integer NOT NULL,
    type character varying(255),
    details text,
    start_date date,
    end_date date,
    constituency_id integer,
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
    voter_id character(10) NOT NULL,
    name text,
    date_of_birth date,
    sex character(1),
    address text,
    contituency_id integer,
    constituency_name character varying(255)
);


ALTER TABLE public.voter OWNER TO postgres;

--
-- Name: wallet_details; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.wallet_details (
    voter_id integer NOT NULL,
    wallet_address text
);


ALTER TABLE public.wallet_details OWNER TO postgres;

--
-- Data for Name: candidate; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.candidate (candidate_id, sex, name, age, constituency_id, constituency_name, party, election_id) FROM stdin;
1	M	Alok Joshi	20	211	Khadakwasla	CCP	1
2	M	Neel Patwardhan	20	211	Khadakwasla	RSS	1
\.


--
-- Data for Name: election; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.election (election_id, type, details, start_date, end_date, constituency_id, admin_id) FROM stdin;
1	Loksabha	Loksabha Elections 2022 for constituency 211	2022-10-01	2022-10-07	211	1
2	Vidhan Sabha	Vidhan Sabha Elections 2022 for constituency 211	2022-11-01	2022-11-07	211	2
\.


--
-- Data for Name: election_admin; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.election_admin (admin_id, name) FROM stdin;
1	Shreyas Gavhalkar
2	Om Gogte
\.


--
-- Data for Name: voter; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.voter (voter_id, name, date_of_birth, sex, address, contituency_id, constituency_name) FROM stdin;
123ABC1234	Test Voter 1	2000-01-01	M	Assume address	211	Khadakwasla
123ABC1235	Test Voter 2	2000-01-01	M	Assume address	211	Khadakwasla
\.


--
-- Data for Name: wallet_details; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.wallet_details (voter_id, wallet_address) FROM stdin;
\.


--
-- Name: candidate candidate_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.candidate
    ADD CONSTRAINT candidate_pkey PRIMARY KEY (candidate_id);


--
-- Name: election_admin election_admin_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.election_admin
    ADD CONSTRAINT election_admin_pkey PRIMARY KEY (admin_id);


--
-- Name: election election_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.election
    ADD CONSTRAINT election_pkey PRIMARY KEY (election_id);


--
-- Name: voter voter_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.voter
    ADD CONSTRAINT voter_pkey PRIMARY KEY (voter_id);


--
-- Name: wallet_details wallet_details_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.wallet_details
    ADD CONSTRAINT wallet_details_pkey PRIMARY KEY (voter_id);


--
-- PostgreSQL database dump complete
--


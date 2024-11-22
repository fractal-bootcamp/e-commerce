--
-- PostgreSQL database dump
--

-- Dumped from database version 16.5
-- Dumped by pg_dump version 16.6 (Homebrew)

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

--
-- Name: public; Type: SCHEMA; Schema: -; Owner: neondb_owner
--

-- *not* creating schema, since initdb creates it


ALTER SCHEMA public OWNER TO neondb_owner;

--
-- Name: SCHEMA public; Type: COMMENT; Schema: -; Owner: neondb_owner
--

COMMENT ON SCHEMA public IS '';


--
-- Name: Country; Type: TYPE; Schema: public; Owner: neondb_owner
--

CREATE TYPE public."Country" AS ENUM (
    'JAPAN',
    'SOUTH_KOREA',
    'THAILAND',
    'TAIWAN',
    'CHINA',
    'INDONESIA',
    'PHILIPPINES',
    'MEXICO',
    'INDIA',
    'AUSTRALIA',
    'PERU',
    'SPAIN',
    'SRI_LANKA'
);


ALTER TYPE public."Country" OWNER TO neondb_owner;

--
-- Name: OrderStatus; Type: TYPE; Schema: public; Owner: neondb_owner
--

CREATE TYPE public."OrderStatus" AS ENUM (
    'PENDING',
    'PAID',
    'SHIPPED',
    'DELIVERED',
    'CANCELLED',
    'REFUNDED'
);


ALTER TYPE public."OrderStatus" OWNER TO neondb_owner;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: Order; Type: TABLE; Schema: public; Owner: neondb_owner
--

CREATE TABLE public."Order" (
    id text NOT NULL,
    "userId" text NOT NULL,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "updatedAt" timestamp(3) without time zone NOT NULL,
    total integer NOT NULL,
    "paymentId" text,
    "paymentStatus" text,
    "orderStatus" public."OrderStatus" NOT NULL,
    "stripeSessionId" text,
    "stripePaymentIntentId" text
);


ALTER TABLE public."Order" OWNER TO neondb_owner;

--
-- Name: Product; Type: TABLE; Schema: public; Owner: neondb_owner
--

CREATE TABLE public."Product" (
    id text NOT NULL,
    name text NOT NULL,
    description text,
    "imageUrl" text,
    country public."Country",
    category text,
    inventory_count integer NOT NULL,
    price integer NOT NULL,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "updatedAt" timestamp(3) without time zone NOT NULL,
    "stripePriceId" text,
    "stripeProductId" text
);


ALTER TABLE public."Product" OWNER TO neondb_owner;

--
-- Name: User; Type: TABLE; Schema: public; Owner: neondb_owner
--

CREATE TABLE public."User" (
    id text NOT NULL,
    "auth0Id" text NOT NULL,
    email text NOT NULL,
    name text,
    address text,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "updatedAt" timestamp(3) without time zone NOT NULL,
    "stripeCustomerId" text
);


ALTER TABLE public."User" OWNER TO neondb_owner;

--
-- Name: _OrderToProduct; Type: TABLE; Schema: public; Owner: neondb_owner
--

CREATE TABLE public."_OrderToProduct" (
    "A" text NOT NULL,
    "B" text NOT NULL
);


ALTER TABLE public."_OrderToProduct" OWNER TO neondb_owner;

--
-- Name: _prisma_migrations; Type: TABLE; Schema: public; Owner: neondb_owner
--

CREATE TABLE public._prisma_migrations (
    id character varying(36) NOT NULL,
    checksum character varying(64) NOT NULL,
    finished_at timestamp with time zone,
    migration_name character varying(255) NOT NULL,
    logs text,
    rolled_back_at timestamp with time zone,
    started_at timestamp with time zone DEFAULT now() NOT NULL,
    applied_steps_count integer DEFAULT 0 NOT NULL
);


ALTER TABLE public._prisma_migrations OWNER TO neondb_owner;

--
-- Data for Name: Order; Type: TABLE DATA; Schema: public; Owner: neondb_owner
--

COPY public."Order" (id, "userId", "createdAt", "updatedAt", total, "paymentId", "paymentStatus", "orderStatus", "stripeSessionId", "stripePaymentIntentId") FROM stdin;
cm3t4f7r60001p2prhgg7n49u	nOp9rUOK09U5NNo0o33v89yjsRD3	2024-11-22 19:15:04.577	2024-11-22 19:15:04.577	1598	\N	\N	PENDING	\N	\N
cm3t4iu4l0003p2pruzxvbtdz	nOp9rUOK09U5NNo0o33v89yjsRD3	2024-11-22 19:17:53.542	2024-11-22 19:17:53.542	1598	\N	\N	PENDING	\N	\N
cm3t4j10z0005p2prvu9vwvu0	nOp9rUOK09U5NNo0o33v89yjsRD3	2024-11-22 19:18:02.482	2024-11-22 19:18:02.482	799	\N	\N	PENDING	\N	\N
cm3t4mlvs0007p2pr05lds7h1	nOp9rUOK09U5NNo0o33v89yjsRD3	2024-11-22 19:20:49.48	2024-11-22 19:20:49.48	799	\N	\N	PENDING	\N	\N
cm3t4rt2t0009p2prhcpscsp6	nOp9rUOK09U5NNo0o33v89yjsRD3	2024-11-22 19:24:52.086	2024-11-22 19:24:52.086	799	\N	\N	PENDING	\N	\N
cm3t4u1bn000bp2pr96ibszuf	nOp9rUOK09U5NNo0o33v89yjsRD3	2024-11-22 19:26:36.083	2024-11-22 19:26:36.083	698	\N	\N	PENDING	\N	\N
cm3t4uwgb000dp2pr7zhkvzx6	nOp9rUOK09U5NNo0o33v89yjsRD3	2024-11-22 19:27:16.427	2024-11-22 19:27:16.427	698	\N	\N	PENDING	\N	\N
cm3t51m9p000fp2pr90sb16s8	nOp9rUOK09U5NNo0o33v89yjsRD3	2024-11-22 19:32:29.821	2024-11-22 19:32:29.821	698	\N	\N	PENDING	\N	\N
cm3t53z3y000hp2prq3nooel7	nOp9rUOK09U5NNo0o33v89yjsRD3	2024-11-22 19:34:19.774	2024-11-22 19:34:19.774	698	\N	\N	PENDING	\N	\N
cm3t55gas000jp2prz0homtzv	nOp9rUOK09U5NNo0o33v89yjsRD3	2024-11-22 19:35:28.709	2024-11-22 19:35:28.709	799	\N	\N	PENDING	\N	\N
cm3t56f67000lp2prn3ecdbek	nOp9rUOK09U5NNo0o33v89yjsRD3	2024-11-22 19:36:13.904	2024-11-22 19:36:13.904	998	\N	\N	PENDING	\N	\N
cm3t58l5v000np2prn3al0rve	nOp9rUOK09U5NNo0o33v89yjsRD3	2024-11-22 19:37:54.979	2024-11-22 19:37:54.979	598	\N	\N	PENDING	\N	\N
cm3t5bn2y000pp2pr9mu5yisb	nOp9rUOK09U5NNo0o33v89yjsRD3	2024-11-22 19:40:17.434	2024-11-22 19:40:17.434	2196	\N	\N	PENDING	\N	\N
cm3t5vajf000rp2prh9rvuia7	nOp9rUOK09U5NNo0o33v89yjsRD3	2024-11-22 19:55:34.298	2024-11-22 19:55:34.298	3794	\N	\N	PENDING	\N	\N
cm3t5xtm5000tp2prvkxcj6h7	nOp9rUOK09U5NNo0o33v89yjsRD3	2024-11-22 19:57:32.333	2024-11-22 19:57:32.333	3794	\N	\N	PENDING	\N	\N
\.


--
-- Data for Name: Product; Type: TABLE DATA; Schema: public; Owner: neondb_owner
--

COPY public."Product" (id, name, description, "imageUrl", country, category, inventory_count, price, "createdAt", "updatedAt", "stripePriceId", "stripeProductId") FROM stdin;
cm3ougbjn0000ppdwuaedb41o	Kurkure Masala Munch	Crunchy corn puffs with authentic Indian spices	https://res.cloudinary.com/ds4kobyhb/image/upload/v1732043048/snack-safari/q7ftdqokkn5nq1abfid4.jpg	INDIA	snacks	100	299	2024-11-19 19:24:55.282	2024-11-19 19:24:55.282	\N	\N
cm3ovqubd0000mbtccgedidvr	Haldirams Soan Papdi	Popular flaky Indian sweet made with gram flour, ghee, and cardamom	https://res.cloudinary.com/ds4kobyhb/image/upload/v1/snack-safari/p89z92528hbssthkckkc.png?_a=BAMCkGJu0	INDIA	sweets	50	599	2024-11-19 20:01:05.784	2024-11-19 20:01:05.784	\N	\N
cm3ovqudy0001mbtcyz78tify	Haldirams Aloo Bhujia	Classic Indian crispy noodle snack made from potato and chickpea flour with traditional spices	https://res.cloudinary.com/ds4kobyhb/image/upload/v1/snack-safari/g6ug1iq6nk2heuhhqo03.jpg?_a=BAMCkGJu0	INDIA	snacks	50	399	2024-11-19 20:01:05.879	2024-11-19 20:01:05.879	\N	\N
cm3ovquej0002mbtc4a5r7kpz	Sublime Chocolate	Iconic Peruvian milk chocolate bar with peanuts	https://res.cloudinary.com/ds4kobyhb/image/upload/v1/snack-safari/hwugm6svvtfnx1mr2nyz.jpg?_a=BAMCkGJu0	PERU	sweets	30	799	2024-11-19 20:01:05.899	2024-11-19 20:01:05.899	\N	\N
cm3ovquf50003mbtcqvhp4owi	Inca Corn (Maiz Gigante)	Giant toasted corn kernels - a traditional Peruvian snack	https://res.cloudinary.com/ds4kobyhb/image/upload/v1/snack-safari/pogm7ftydweqi1yxjtsl.png?_a=BAMCkGJu0	PERU	snacks	75	399	2024-11-19 20:01:05.921	2024-11-19 20:01:05.921	\N	\N
cm3ovqufq0004mbtcvbdmb0t4	Munchee Lemon Puff	Iconic Sri Lankan cream-filled lemon-flavored biscuits - a tea-time favorite	https://res.cloudinary.com/ds4kobyhb/image/upload/v1/snack-safari/dhmlcoxpsnd4pyjocdlb.png?_a=BAMCkGJu0	SRI_LANKA	sweets	40	499	2024-11-19 20:01:05.942	2024-11-19 20:01:05.942	\N	\N
cm3ovqug90005mbtcw25wyzs2	Cassava Chips Kochchii Chilli	Spicy cassava chips - a favorite Sri Lankan snack	https://res.cloudinary.com/ds4kobyhb/image/upload/v1/snack-safari/op6ytqajklvekbdblugd.jpg?_a=BAMCkGJu0	SRI_LANKA	snacks	60	349	2024-11-19 20:01:05.962	2024-11-19 20:01:05.962	\N	\N
cm3ovquj60006mbtc6ikso5mv	Arnotts Tim Tams	Australias favorite chocolate biscuit - malted cookies coated in chocolate	https://res.cloudinary.com/ds4kobyhb/image/upload/v1/snack-safari/pqsxcqct1dhvwgvtnhpu.jpg?_a=BAMCkGJu0	AUSTRALIA	sweets	200	499	2024-11-19 20:01:06.067	2024-11-19 20:01:06.067	\N	\N
cm3ovqujw0007mbtcpz4rnyv7	Red Rock Deli Sweet Chilli & Sour Cream	Premium Australian potato chips with a perfect blend of sweet chilli and creamy tang	https://res.cloudinary.com/ds4kobyhb/image/upload/v1/snack-safari/gyju9qrdvemcw36mup35.png?_a=BAMCkGJu0	AUSTRALIA	snacks	150	499	2024-11-19 20:01:06.092	2024-11-19 20:01:06.092	\N	\N
cm3ovquki0008mbtcnek5u6xx	Arnotts Shapes BBQ	Iconic Australian savory biscuits with bold BBQ flavor - a party favorite	https://res.cloudinary.com/ds4kobyhb/image/upload/v1/snack-safari/bckudvwcy4d9njhrkoae.jpg?_a=BAMCkGJu0	AUSTRALIA	snacks	120	449	2024-11-19 20:01:06.115	2024-11-19 20:01:06.115	\N	\N
\.


--
-- Data for Name: User; Type: TABLE DATA; Schema: public; Owner: neondb_owner
--

COPY public."User" (id, "auth0Id", email, name, address, "createdAt", "updatedAt", "stripeCustomerId") FROM stdin;
cm3pczcae0000k6j6fvyth2fo	nOp9rUOK09U5NNo0o33v89yjsRD3	malink027@gmail.com	\N	\N	2024-11-20 04:03:35.798	2024-11-20 04:03:35.798	\N
\.


--
-- Data for Name: _OrderToProduct; Type: TABLE DATA; Schema: public; Owner: neondb_owner
--

COPY public."_OrderToProduct" ("A", "B") FROM stdin;
cm3t4f7r60001p2prhgg7n49u	cm3ovquej0002mbtc4a5r7kpz
cm3t4iu4l0003p2pruzxvbtdz	cm3ovquej0002mbtc4a5r7kpz
cm3t4j10z0005p2prvu9vwvu0	cm3ovquej0002mbtc4a5r7kpz
cm3t4mlvs0007p2pr05lds7h1	cm3ovquej0002mbtc4a5r7kpz
cm3t4rt2t0009p2prhcpscsp6	cm3ovquej0002mbtc4a5r7kpz
cm3t4u1bn000bp2pr96ibszuf	cm3ougbjn0000ppdwuaedb41o
cm3t4u1bn000bp2pr96ibszuf	cm3ovqudy0001mbtcyz78tify
cm3t4uwgb000dp2pr7zhkvzx6	cm3ougbjn0000ppdwuaedb41o
cm3t4uwgb000dp2pr7zhkvzx6	cm3ovqudy0001mbtcyz78tify
cm3t51m9p000fp2pr90sb16s8	cm3ougbjn0000ppdwuaedb41o
cm3t51m9p000fp2pr90sb16s8	cm3ovqudy0001mbtcyz78tify
cm3t53z3y000hp2prq3nooel7	cm3ougbjn0000ppdwuaedb41o
cm3t53z3y000hp2prq3nooel7	cm3ovqudy0001mbtcyz78tify
cm3t55gas000jp2prz0homtzv	cm3ovquej0002mbtc4a5r7kpz
cm3t56f67000lp2prn3ecdbek	cm3ovqufq0004mbtcvbdmb0t4
cm3t58l5v000np2prn3al0rve	cm3ougbjn0000ppdwuaedb41o
cm3t5bn2y000pp2pr9mu5yisb	cm3ougbjn0000ppdwuaedb41o
cm3t5bn2y000pp2pr9mu5yisb	cm3ovquej0002mbtc4a5r7kpz
cm3t5vajf000rp2prh9rvuia7	cm3ougbjn0000ppdwuaedb41o
cm3t5vajf000rp2prh9rvuia7	cm3ovquej0002mbtc4a5r7kpz
cm3t5xtm5000tp2prvkxcj6h7	cm3ougbjn0000ppdwuaedb41o
cm3t5xtm5000tp2prvkxcj6h7	cm3ovquej0002mbtc4a5r7kpz
\.


--
-- Data for Name: _prisma_migrations; Type: TABLE DATA; Schema: public; Owner: neondb_owner
--

COPY public._prisma_migrations (id, checksum, finished_at, migration_name, logs, rolled_back_at, started_at, applied_steps_count) FROM stdin;
777c1af1-5382-41a1-9823-c4879c62ae86	56f68b4b44eb627bc4e91c34bd831f342b5deaf6069e1dbe5fc0779a205c4de7	2024-11-19 18:19:29.171988+00	20241119164913_	\N	\N	2024-11-19 18:19:28.982116+00	1
\.


--
-- Name: Order Order_pkey; Type: CONSTRAINT; Schema: public; Owner: neondb_owner
--

ALTER TABLE ONLY public."Order"
    ADD CONSTRAINT "Order_pkey" PRIMARY KEY (id);


--
-- Name: Product Product_pkey; Type: CONSTRAINT; Schema: public; Owner: neondb_owner
--

ALTER TABLE ONLY public."Product"
    ADD CONSTRAINT "Product_pkey" PRIMARY KEY (id);


--
-- Name: User User_pkey; Type: CONSTRAINT; Schema: public; Owner: neondb_owner
--

ALTER TABLE ONLY public."User"
    ADD CONSTRAINT "User_pkey" PRIMARY KEY (id);


--
-- Name: _prisma_migrations _prisma_migrations_pkey; Type: CONSTRAINT; Schema: public; Owner: neondb_owner
--

ALTER TABLE ONLY public._prisma_migrations
    ADD CONSTRAINT _prisma_migrations_pkey PRIMARY KEY (id);


--
-- Name: Order_stripePaymentIntentId_key; Type: INDEX; Schema: public; Owner: neondb_owner
--

CREATE UNIQUE INDEX "Order_stripePaymentIntentId_key" ON public."Order" USING btree ("stripePaymentIntentId");


--
-- Name: Order_stripeSessionId_key; Type: INDEX; Schema: public; Owner: neondb_owner
--

CREATE UNIQUE INDEX "Order_stripeSessionId_key" ON public."Order" USING btree ("stripeSessionId");


--
-- Name: Order_userId_idx; Type: INDEX; Schema: public; Owner: neondb_owner
--

CREATE INDEX "Order_userId_idx" ON public."Order" USING btree ("userId");


--
-- Name: Product_category_idx; Type: INDEX; Schema: public; Owner: neondb_owner
--

CREATE INDEX "Product_category_idx" ON public."Product" USING btree (category);


--
-- Name: Product_country_category_idx; Type: INDEX; Schema: public; Owner: neondb_owner
--

CREATE INDEX "Product_country_category_idx" ON public."Product" USING btree (country, category);


--
-- Name: Product_country_idx; Type: INDEX; Schema: public; Owner: neondb_owner
--

CREATE INDEX "Product_country_idx" ON public."Product" USING btree (country);


--
-- Name: Product_stripePriceId_key; Type: INDEX; Schema: public; Owner: neondb_owner
--

CREATE UNIQUE INDEX "Product_stripePriceId_key" ON public."Product" USING btree ("stripePriceId");


--
-- Name: Product_stripeProductId_key; Type: INDEX; Schema: public; Owner: neondb_owner
--

CREATE UNIQUE INDEX "Product_stripeProductId_key" ON public."Product" USING btree ("stripeProductId");


--
-- Name: User_auth0Id_key; Type: INDEX; Schema: public; Owner: neondb_owner
--

CREATE UNIQUE INDEX "User_auth0Id_key" ON public."User" USING btree ("auth0Id");


--
-- Name: User_email_key; Type: INDEX; Schema: public; Owner: neondb_owner
--

CREATE UNIQUE INDEX "User_email_key" ON public."User" USING btree (email);


--
-- Name: User_stripeCustomerId_key; Type: INDEX; Schema: public; Owner: neondb_owner
--

CREATE UNIQUE INDEX "User_stripeCustomerId_key" ON public."User" USING btree ("stripeCustomerId");


--
-- Name: _OrderToProduct_AB_unique; Type: INDEX; Schema: public; Owner: neondb_owner
--

CREATE UNIQUE INDEX "_OrderToProduct_AB_unique" ON public."_OrderToProduct" USING btree ("A", "B");


--
-- Name: _OrderToProduct_B_index; Type: INDEX; Schema: public; Owner: neondb_owner
--

CREATE INDEX "_OrderToProduct_B_index" ON public."_OrderToProduct" USING btree ("B");


--
-- Name: Order Order_userId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: neondb_owner
--

ALTER TABLE ONLY public."Order"
    ADD CONSTRAINT "Order_userId_fkey" FOREIGN KEY ("userId") REFERENCES public."User"("auth0Id") ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: _OrderToProduct _OrderToProduct_A_fkey; Type: FK CONSTRAINT; Schema: public; Owner: neondb_owner
--

ALTER TABLE ONLY public."_OrderToProduct"
    ADD CONSTRAINT "_OrderToProduct_A_fkey" FOREIGN KEY ("A") REFERENCES public."Order"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: _OrderToProduct _OrderToProduct_B_fkey; Type: FK CONSTRAINT; Schema: public; Owner: neondb_owner
--

ALTER TABLE ONLY public."_OrderToProduct"
    ADD CONSTRAINT "_OrderToProduct_B_fkey" FOREIGN KEY ("B") REFERENCES public."Product"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: SCHEMA public; Type: ACL; Schema: -; Owner: neondb_owner
--

REVOKE USAGE ON SCHEMA public FROM PUBLIC;


--
-- Name: DEFAULT PRIVILEGES FOR SEQUENCES; Type: DEFAULT ACL; Schema: public; Owner: cloud_admin
--

ALTER DEFAULT PRIVILEGES FOR ROLE cloud_admin IN SCHEMA public GRANT ALL ON SEQUENCES TO neon_superuser WITH GRANT OPTION;


--
-- Name: DEFAULT PRIVILEGES FOR TABLES; Type: DEFAULT ACL; Schema: public; Owner: cloud_admin
--

ALTER DEFAULT PRIVILEGES FOR ROLE cloud_admin IN SCHEMA public GRANT ALL ON TABLES TO neon_superuser WITH GRANT OPTION;


--
-- PostgreSQL database dump complete
--


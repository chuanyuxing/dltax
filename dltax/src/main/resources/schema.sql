/* master */
CREATE TABLE wf_status 
    code            varchar(10),(/* applied/approved/checked/noticed/confirmed/accounted/finished */  
    name            varchar(30),
    next            varchar(10),
    display_order   int,     
    create_at       date,
    update_at       date
);

CREATE TABLE area (
    code            varchar(10),
    name            varchar(30),
    display_order   int,
    create_at       date,
    update_at       date
);

CREATE TABLE property (
  id               varchar(30) not null,
  name             varchar(30) not null,
  type             varchar(10) not null,/* string/text/number/date */
  digit            int,
  pulldown_flag    int,
  create_at        date,
  update_at        date
};

CREATE TABLE role_property (
  role_id         varchar(30) not null,
  property_id     varchar(30) not null,
  readonly        int,
  display_order   int,
  create_at       date,
  update_at       date
};


CREATE TABLE pulldown (
  property_id     varchar(30) not null,
  code            varchar(10),
  value           varchar(30),
  create_at       date,
  update_at       date
};


CREATE TABLE user (
  id              varchar(30) not null,
  group_id        varchar(30) not null,
  password        varchar(300) not null,
  firstname       varchar(30),
  lastname        varchar(30),
  mail            varchar(30),
  admin_flag      int,
  create_at       date,
  update_at       date
};

CREATE TABLE user_role (
  user_id         varchar(30) not null,
  role_id         varchar(30) not null,
  create_at       date,
  update_at       date
};

CREATE TABLE right (
  id          	  varchar(30) not null,
  name        	  varchar(100) not null,
  create_at       date,
  update_at       date
};


CREATE TABLE role_right ( 
  role_id         varchar(30) not null,
  right_id        varchar(30) not null,
  create_at       date,
  update_at       date
};

/* data */
CREATE TABLE wf_list (
    id              serial,
    customer_id     int,
    group_keyword   varchar(30),
    status_code     varchar(10),
    reject_flag     int,   
    note     	    varchar(2000),
    apply_user      varchar(30),
    apply_date      date,
    approve_user    varchar(30),
    approve_date    date,
    create_at       date,
    update_at       date
);

CREATE TABLE wf_history (
    id              serial,
    customer_id     int,
    group_keyword   varchar(30),
    status_code     varchar(10),
    reject_flag     int,
    apply_user      varchar(30),
    apply_date      date,
    approve_user    varchar(30),
    approve_date    date,
    comment         varchar(2000),
    create_at       date,
    update_at       date
);

CREATE TABLE customer (
  id                serial,
  customer_id       int,/* only */
  customer_cd       varchar(30),
  /* todo */
  create_at         date,
  update_at         date
};


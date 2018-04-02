/* master */
CREATE TABLE wf_status 
    code            varchar(10),(/* new/applied/approved/checked/noticed/confirmed/accounted/finished */  
    name            varchar(30),
    next_code       varchar(10), 
    display_order   int,
    create_at            date,
    update_at            date
);

CREATE TABLE area (
    code            varchar(10),
    name            varchar(30),
    display_order   int,
    create_at            date,
    update_at            date
);


CREATE TABLE property (
  id            varchar(30) not null,
  name          varchar(30) not null,
  must_flag     int,
  pulldown_flag int,
  create_at            date,
  update_at            date
}


CREATE TABLE role_property (
  role_id         varchar(30) not null,
  property_id     varchar(30) not null,
  readonly        int,
  display_order   int,
  create_at       date,
  update_at       date
}

/* data */
CREATE TABLE wf_list (
    id              serial,
    customer_id     int,
    group_keyword   varchar(30),
    status_code  varchar(10),
    reject_flag  int,   
    note     varchar(2000),
    apply_user   varchar(30),
    apply_date   date,
    approve_user varchar(30),
    approve_date date,
    create_at            date,
    update_at            date
);

CREATE TABLE wf_history (
    id              serial,
    customer_id     int,
    group_keyword   varchar(30),
    status_code  varchar(10),
    reject_flag  int,
    apply_user   varchar(30),
    apply_date   date,
    approve_user varchar(30),
    approve_date date,
    comment     varchar(2000),
    create_at            date,
    update_at            date
);


CREATE TABLE customer (
  id              serial,
  customer_id     int,/* only */
  customer_cd     varchar(30),
  /* todo */
  create_at            date,
  update_at            date
}

/* master */
CREATE TABLE wf (
    code            varchar(10) primary key(/* tax80/tax20/dispatch */  
    name            varchar(30),
    next_code       varchar(10),
    display_order   integer default 0,   
    create_at       date,
    update_at       date
);

CREATE TABLE wf_status (
    wf_code         varchar(10),
    code            varchar(10),(/* applied/approved/checked/noticed/confirmed/accounted/finished */  
    name            varchar(30),
    next_code       varchar(10),
    display_order   integer,     
    create_at       date,
    update_at       date,
    constraint wf_status_key primary key (
      wf_code,
      code
    )
);

CREATE TABLE area (
    code            varchar(10) primary key,
    name            varchar(30),
    display_order   integer default 0,
    create_at       date,
    update_at       date
);

CREATE TABLE property (
  id               varchar(30) primary key,
  name             varchar(30) not null,
  type             varchar(10) not null,/* string/text/number/date */
  digit            integer default 0,
  pulldown_flag    integer default 0,
  hint_flag        integer default 0,
  create_at        date,
  update_at        date
};

CREATE TABLE role_property (
  role_id         varchar(30) not null,
  property_id     varchar(30) not null,
  readonly_flag   integer default 0,
  display_order   integer default 0,
  create_at       date,
  update_at       date
};


CREATE TABLE pulldown (
  property_id     varchar(30) not null,
  name            varchar(30),
  value           varchar(30),
  display_order   integer default 0,
  create_at       date,
  update_at       date
};


CREATE TABLE user (
  id              varchar(30) primary key,
  role_id         varchar(30) not null,
  group_id        varchar(30) not null,
  password        varchar(300) not null,
  firstname       varchar(30),
  lastname        varchar(30),
  area_code       varchar(10),
  mail            varchar(30),
  admin_flag      integer default 0,
  lock_flag       integer default 0,
  invalid_flag    integer default 0,
  create_at       date,
  update_at       date
};

CREATE TABLE role (
  id          	  varchar(30)  primary key,
  name        	  varchar(100) not null,
  display_order   integer default 0,
  create_at       date,
  update_at       date
};


/*CREATE TABLE user_role (
  user_id         varchar(30) not null,
  role_id         varchar(30) not null,
  create_at       date,
  update_at       date
};*/

CREATE TABLE right (
  id          	  varchar(30) primary key,
  name        	  varchar(100) not null,
  display_order   integer default 0,
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
    id              serial primary key,
    customer_id     int,
    wf_code         varchar(10),
    group_keyword   varchar(30),
    wf_status_code  varchar(10),
    reject_flag     integer, 
    note     	    varchar(2000),
    apply_user      varchar(30),
    apply_date      date,
    approve_user    varchar(30),
    approve_date    date,
    create_at       date,
    update_at       date
);

CREATE TABLE wf_history (
    wf_list_id      integer,
    wf_old_list_id  integer,
    wf_code         varchar(10),
    customer_id     integer,
    group_keyword   varchar(30),
    status_code     varchar(10),
    reject_flag     integer,
    apply_user      varchar(30),
    apply_date      date,
    approve_user    varchar(30),
    approve_date    date,
    note            varchar(2000),
    create_at       date,
    update_at       date
);

CREATE TABLE customer (
  id                serial primary key,
  customer_id       integer,/* only */
  customer_cd       varchar(30),
  /* todo */
  create_at         date,
  update_at         date
};


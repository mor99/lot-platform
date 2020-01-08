//面包屑
/*   withBreadcrumbs(routes)(({ breadcrumbs }) => (
        <div>
          {breadcrumbs.map((breadcrumb, index) => (
            <span key={breadcrumb.key}>
              <NavLink to={breadcrumb.props.match.url}>
                {breadcrumb}
              </NavLink>
              {(index < breadcrumbs.length - 1) && <i> / </i>}
            </span>
          ))}
        </div>
      )); */
import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Breadcrumb, Icon} from 'antd';

const breadcrumbNameMap = [
  { path: '/', breadcrumb: '首页' },
  { path: '/overall', breadcrumb: '你好' },
];

export const Bread = withRouter((props) => {
  //location 为浏览器默认的api
  const { location } = props;
  //const breadcrumbNameMap = BreadcrumbNameMap;

  const url = location.pathname

  let isIndex = false;
  if ( url === '/') {
    isIndex = true;
  }

  const nameItem = breadcrumbNameMap[url]

  const breadcrumbItems = [(
    <Breadcrumb.Item key="home">
            <Link to=""><Icon type="home" /></Link>
        </Breadcrumb.Item>
    ),(<Breadcrumb.Item key={url}>
    <Link to={url}>
      {nameItem}
    </Link>
  </Breadcrumb.Item>)]

  return (
        isIndex ? null :
            <div className="breadcrumb-content">
                <Breadcrumb>
                    {breadcrumbItems}
                </Breadcrumb>
            </div>
  );
});

    
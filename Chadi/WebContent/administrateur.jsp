<%@ page language="java" contentType="text/html; charset=ISO-8859-1" pageEncoding="ISO-8859-1"%>
<%@ taglib prefix="f"  uri="http://java.sun.com/jsf/core"%>
<%@ taglib prefix="h"  uri="http://java.sun.com/jsf/html"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html>
<html lang="en">
<head>
<base href="css/">
    <title>Administration</title>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="shortcut icon" href="images/icons/favicon.ico">
    <link rel="apple-touch-icon" href="images/icons/favicon.png">
    <link rel="apple-touch-icon" sizes="72x72" href="images/icons/favicon-72x72.png">
    <link rel="apple-touch-icon" sizes="114x114" href="images/icons/favicon-114x114.png">
    <!--Loading bootstrap css-->
    <link type="text/css" rel="stylesheet" href="http://fonts.googleapis.com/css?family=Open+Sans:400italic,400,300,700">
    <link type="text/css" rel="stylesheet" href="http://fonts.googleapis.com/css?family=Oswald:400,700,300">
    <link type="text/css" rel="stylesheet" href="styles/jquery-ui-1.10.4.custom.min.css">
    <link type="text/css" rel="stylesheet" href="styles/font-awesome.min.css">
    <link type="text/css" rel="stylesheet" href="styles/bootstrap.min.css">
    <link type="text/css" rel="stylesheet" href="styles/animate.css">
    <link type="text/css" rel="stylesheet" href="styles/all.css">
    <link type="text/css" rel="stylesheet" href="styles/main.css">
    <link type="text/css" rel="stylesheet" href="styles/style-responsive.css">
    <link type="text/css" rel="stylesheet" href="styles/zabuto_calendar.min.css">
    <link type="text/css" rel="stylesheet" href="styles/pace.css">
    <link type="text/css" rel="stylesheet" href="styles/jquery.news-ticker.css">
</head>
<body>
    <div>
        
        <!--BEGIN BACK TO TOP-->
        <a id="totop" href="#"><i class="fa fa-angle-up"></i></a>
        <!--END BACK TO TOP-->
        <!--BEGIN TOPBAR-->
                <div id="header-topbar-option-demo" class="page-header-topbar">
            <nav id="topbar" role="navigation" style="margin-bottom: 0;" data-step="3" class="navbar navbar-default navbar-static-top">
            <div class="navbar-header">
                <button type="button" data-toggle="collapse" data-target=".sidebar-collapse" class="navbar-toggle"><span class="sr-only">Toggle navigation</span><span class="icon-bar"></span><span class="icon-bar"></span><span class="icon-bar"></span></button>
                <a id="logo" href="index.html" class="navbar-brand"><span class="fa fa-rocket"></span><img src="Maktabati_Logo1.png" alt="Makhdmch" style="margin:-20px" /><span style="display: none" class="logo-text-icon">Âµ</span></a></div>
            <div class="topbar-main"><a id="menu-toggle" href="#" class="hidden-xs"><i class="fa fa-bars"></i></a>
                
                
  
                <ul class="nav navbar navbar-top-links navbar-right mbn">
                    
                    <li class="dropdown topbar-user"><a data-hover="dropdown" href="#" class="dropdown-toggle"><img src="images/avatar/48.jpg" alt="" class="img-responsive img-circle"/>&nbsp;<span class="hidden-xs">Admin</span>&nbsp;<span class="caret"></span></a>
                        <ul class="dropdown-menu dropdown-user pull-right">
                           
                            <li><a href="login1.jsp"><i class="fa fa-key"></i>Log Out</a></li>
                        </ul>
                    </li>
					 
                    <li id="topbar-chat" class="hidden-xs"><a href="javascript:void(0)" data-step="4" data-intro="&lt;b&gt;Form chat&lt;/b&gt; keep you connecting with other coworker" data-position="left" class="btn-chat"><i class="fa fa-comments"></i><span class="badge badge-info">3</span></a></li>
<li>
               
              </li>               
			   </ul>
            </div>
        </nav>
          
        </div>
        <!-- modal config-livre  -->
        <div id="modal-config-livre" class="modal fade">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <button type="button" data-dismiss="modal" aria-hidden="true" class="close">
                                &times;</button>
                            <h4 class="modal-title">
                                Ajouter un livre</h4>
                        </div>
                        <div class="modal-body">
                        
                            <f:view>
                            <h:form>
                                               <div class="form-body pal">
                                                    <div class="row">
                                                        <div class="col-md-6">
                                                            <div class="form-group">
                                                                <label for="inputName" class="control-label">
                                                                    N° ISBN</label>
                                                                <div class="input-icon right">
                                                                    <i class="fa fa-user"></i>
                                                                    <h:inputText id="inputName" value="#{produitcontroler.liv.isbn}" styleClass="form-control"></h:inputText></div>
                                                            </div>
                                                        </div>
                                                        <div class="col-md-6">
                                                            <div class="form-group">
                                                                <label for="inputPrenom" class="control-label">
                                                                    Titre</label>
                                                                <div class="input-icon right">
                                                                    <i class="fa fa-user"></i>
                                                                    <h:inputText id="inputPrenom" value="#{produitcontroler.liv.titre}" styleClass="form-control" ></h:inputText></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="form-group">
                                                        <label for="inputSubject" class="control-label">
                                                            Auteur</label>
                                                        <div class="input-icon right">
                                                            <i class="fa fa-user"></i>
                                                            <h:inputText id="inputSubject" value="#{produitcontroler.liv.auteur}" styleClass="form-control"></h:inputText></div>
                                                    </div>
                                                     <div class="row">
                                                        <div class="col-md-6">
                                                            <div class="form-group">
                                                                <label for="inputnbrPage" class="control-label">
                                                                    Nombre de page:</label>
                                                                <div class="input-icon right">
                                                                    <i class="fa fa-user"></i>
                                                                    <h:inputText id="inputnbrPage" value="#{produitcontroler.liv.nbrpages}" styleClass="form-control"></h:inputText></div>
                                                            </div>
                                                        </div>
                                                        <div class="col-md-6">
                                                            <div class="form-group">
                                                                <label for="inputnbrexmp" class="control-label">
                                                                    Nomre d'exemplaire</label>
                                                                <div class="input-icon right">
                                                                    <i class="fa fa-user"></i>
                                                                    <h:inputText id="inputnbrexmp" value="#{produitcontroler.liv.nbrexemplaire}" styleClass="form-control" ></h:inputText></div>
                                                            </div>
                                                        </div>
                                                    </div>
													 <div class="form-group">
                                                        <label for="inputEmail" class="control-label">
                                                            langue:</label>
                                                        <div class="input-icon right">
                                                            <i class="fa fa-envelope"></i>
                                                            <h:inputText id="inputEmail" value="#{produitcontroler.liv.langue}" styleClass="form-control"></h:inputText></div>
                                                    </div>
													
                                                    
                                                    <div class="form-group">
                                                        <label for="inputPassword" class="control-label">
                                                            Resumé :</label>
                                                        <div class="input-icon right">
                                                            <i class="fa fa-lock"></i>
                                                            <h:inputTextarea cols="70" rows="6" value="#{produitcontroler.liv.resume}"></h:inputTextarea> </div>
                                                    </div>
                                                    <div class="form-group">
                                                        <label  class="control-label">
                                                            Affiche :</label>
                                                        <div class="input-icon right">
                                                            <i class="fa fa-lock"></i>
                                                            <input type="file"/> </div>
                                                    </div>
                                                    
                                                </div>
                                                <div class="form-actions text-right pal">
                                                    <h:commandButton value="Valider" action="#{produitcontroler.AddLivre()}" styleClass="btn btn-primary">
                                                        </h:commandButton>
                                                </div>
                                               </h:form>
                                                
                        </div>
                       
                        </div>
                    </div>
                </div>
        <!--end  modal config-livre  -->
            <!--BEGIN MODAL CONFIG PORTLET-->
            <div id="modal-config" class="modal fade">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <button type="button" data-dismiss="modal" aria-hidden="true" class="close">
                                &times;</button>
                            <h4 class="modal-title">
                                Ajouter un utilisateur</h4>
                        </div>
                        <div class="modal-body">
                         
                            <h:form>
                                                <div class="form-body pal">
                                                    <div class="row">
                                                        <div class="col-md-6">
                                                            <div class="form-group">
                                                                <label for="inputName" class="control-label">
                                                                    Nom</label>
                                                                <div class="input-icon right">
                                                                    <i class="fa fa-user"></i>
                                                                    <h:inputText id="inputName" value="#{produitcontroler.p.nom}" styleClass="form-control"></h:inputText></div>
                                                            </div>
                                                        </div>
                                                        <div class="col-md-6">
                                                            <div class="form-group">
                                                                <label for="inputPrenom" class="control-label">
                                                                    Prenom</label>
                                                                <div class="input-icon right">
                                                                    <i class="fa fa-user"></i>
                                                                    <h:inputText id="inputPrenom" value="#{produitcontroler.p.prenom}" styleClass="form-control" ></h:inputText></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="form-group">
                                                        <label for="inputSubject" class="control-label">
                                                            Login</label>
                                                        <div class="input-icon right">
                                                            <i class="fa fa-user"></i>
                                                            <h:inputText id="inputSubject" value="#{produitcontroler.p.login}" styleClass="form-control"></h:inputText></div>
                                                    </div>
                                                     <div class="form-group">
                                                        <label for="inputPassword" class="control-label">
                                                            Mot de passe</label>
                                                        <div class="input-icon right">
                                                            <i class="fa fa-lock"></i>
                                                            <h:inputSecret id="inputPassword" value="#{produitcontroler.p.password}" styleClass="form-control"></h:inputSecret></div>
                                                    </div>
													 <div class="form-group">
                                                        <label for="inputEmail" class="control-label">
                                                            Email</label>
                                                        <div class="input-icon right">
                                                            <i class="fa fa-envelope"></i>
                                                            <h:inputText id="inputEmail" value="#{produitcontroler.p.email}" styleClass="form-control"></h:inputText></div>
                                                    </div>
													
                                                    <div class="form-group mbn">
                                                        <div class="checkbox">
                                                            <label>
                                                                <input tabindex="5" type="checkbox" />&nbsp; Send a copy to my e-mail address</label></div>
                                                    </div>
                                                </div>
                                                <div class="form-actions text-right pal">
                                                    <h:commandButton value="submit" action="#{produitcontroler.Add()}" styleClass="btn btn-primary">
                                                        </h:commandButton>
                                                </div>
                                                </h:form>
                                                </f:view>
                        </div>
                       
                        </div>
                    </div>
                </div>
			<!--  <div class="common-modal modal fade" id="common-Modal1" tabindex="-1" role="dialog" aria-hidden="true">
				<div class="modal-content">
					<ul class="list-inline item-details">
						<li><a href="http://themifycloud.com">Admin templates</a></li>
						<li><a href="http://themescloud.org">Bootstrap themes</a></li>
					</ul>
				</div>
			</div> -->
            <!--END MODAL CONFIG PORTLET-->
        </div>
        <!--END TOPBAR-->
        <div id="wrapper" >
            <!--BEGIN SIDEBAR MENU-->
            
          
          
            <div id="page-wrapper" style="margin-left:0 !important">
                <!--BEGIN TITLE & BREADCRUMB PAGE-->
                <div id="title-breadcrumb-option-demo" class="page-title-breadcrumb">
                    <div class="page-header pull-left">
                        <div class="page-title">
                            Extras</div>
                    </div>
                    <ol class="breadcrumb page-breadcrumb pull-right">
                        <li><i class="fa fa-home"></i>&nbsp;<a href="dashboard.html">Home</a>&nbsp;&nbsp;<i class="fa fa-angle-right"></i>&nbsp;&nbsp;</li>
                        <li class="hidden"><a href="#">Extras</a>&nbsp;&nbsp;<i class="fa fa-angle-right"></i>&nbsp;&nbsp;</li>
                        <li class="active">Extras</li>
                    </ol>
                    <div class="clearfix">
                    </div>
                </div>
                <!--END TITLE & BREADCRUMB PAGE-->
                <!--BEGIN CONTENT-->
                <div class="page-content">
                    <div id="tab-general">
                        <div class="row mbl">
                            <div class="col-lg-12">
                                
                                            <div class="col-md-12">
                                                <div id="area-chart-spline" style="width: 100%; height: 300px; display: none;">
                                                </div>
                                            </div>
                                
                            </div>

                            <div class="col-lg-12">
                              
                                    
                              <div class="row">
                    <div class="col-md-12"><h2><ul class="list"><button data-toggle="modal" data-target="#modal-config"
                                                            class="btn btn-primary"><i class="fa fa-user fa-fw">
                        <div class="icon-bg bg-pink"></div>
                    </i>Ajouter Un Utilisateur</button>
															<button data-toggle="modal" data-target="#modal-config-livre"
                                                            class="btn btn-primary"> <i class="fa fa-book fa-fw">
                        <div class="icon-bg bg-pink"></div>
                    </i>Ajouter Un Livre</button></ul></h2>

                        <div class="row ">
                            
                            <div class="col-lg-8">
                                <ul class="nav nav-tabs">
                                    <li class="active"><a href="#tab-empr" data-toggle="tab">Emprunt</a></li>
                                    <li><a href="#tab-reserv" data-toggle="tab">Reservation</a></li>
									<li><a href="#tab-user" data-toggle="tab">Utilisateur</a></li>
                                </ul>
                                <div id="generalTabContent" class="tab-content">
									
                                    
									
									<div id="tab-reserv" class="tab-pane fade in ">
                                        
                                    <div class="panel panel-blue" style="background:#FFF;">
                            <div class="panel-heading">Liste des reservations effectués </div>
                            <div class="panel-body">
                                <table class="table table-hover table-bordered">
                                    <thead>
                                    <tr>
                                        
                                        <th>Titre</th>
                                        <th>ISBN</th>
                                        <th>Utilisateur</th>
                                        <th>Email</th>
                                        <th>Action</th>
                                        
                                    </tr>
                                    </thead>
                                    <tbody>
                                    
                                    <c:forEach items="${AdminBean.ListReserv()}" var="reserv">
                                    <tr>
                                        
                                        <td>${AdminBean.getLiv2().getLivre(reserv.getIsbn()).getTitre()}</td>
                                        <td>${AdminBean.getLiv2().getLivre(reserv.getIsbn()).getIsbn()}</td>
                                        <td>${AdminBean.getUser2().getUser(reserv.getCode()).getNom()} ${AdminBean.getUser2().getUser(reserv.getCode()).getPrenom()}</td>
                                        <td>${AdminBean.getUser2().getUser(reserv.getCode()).getEmail()}</td>
                                        <td><a   href="../administrateur.jsp?id=${AdminBean.getLiv2().getLivre(reserv.getIsbn()).getIsbn()}" class="btn btn-primary"><i class="fa fa-user-times fa-fw">
                        <div class="icon-bg bg-red"></div>
                    </i>Supprimer</a></td>
                                        
                                    </tr>
                                    </c:forEach>
                                  <%@page import="javax.faces.context.FacesContext" %>
                                  <%@page import="web.AdminController" %>
                                    <% FacesContext facesContext = FacesContext.getCurrentInstance();
                         		   String passedParameter = (String) facesContext.getExternalContext().getRequestParameterMap().get("id");
                         		   if(passedParameter != null) {
                         		    int t = Integer.parseInt(passedParameter,10);
                         		    
                         		    (new AdminController()).deleteRes(t);
                         		   } 
                         		     %>
                                    </tbody>
                                    <tfoot>
                                  
                                    </tfoot>
                                </table>
                            </div>
                        </div>
									</div>
									
									
									
									
									<div id="tab-user" class="tab-pane fade in">
                                        
                                    <div class="panel panel-blue" style="background:#FFF;">
                            <div class="panel-heading">Liste des Utilisateurs</div>
                            <div class="panel-body">
                                <table class="table table-hover table-bordered">
                                    <thead>
                                    
                                    <tr>
                                        
                                        <th>Nom</th>
                                        <th>Prenom</th>
                                        <th>Email</th>
                                        
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <c:forEach items="${AdminBean.ListUtilisateur()}" var="user">
                                    <tr>
                                        
                                        <td>${user.nom}</td>
                                        <td>${user.prenom}</td>
                                        <td>${user.email}</td>
                                        
                                    </tr>
                                    </c:forEach>
                                    </tbody>
                                    <tfoot>
                                   <!-- <tr>
                                        <th></th>
                                        <th><i>4 People</i></th>
                                        <th></th>
                                        <th><i>1 Approved</i></th>
                                    </tr>-->
                                    </tfoot>
                                </table>
                            </div>
                        </div>
									</div>
                                    
									
									
									<div id="tab-empr" class="tab-pane fade in active">
									<div class="panel panel-blue" style="background:#FFF;">
                            <div class="panel-heading">Liste des emprunts effectués</div>
                            <div class="panel-body">
                                <table class="table table-hover table-bordered">
                                    <thead>
                                    <tr>
                                        
                                        <th>Titre</th>
                                        <th>ISBN</th>
                                        <th>Date d'emprunt</th>
                                        <th>Utilisateur</th>
                                        <th>Email</th>
                                        
                                        
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <c:forEach items="${AdminBean.ListEmprunt()}" var="empr">
                                    <tr>
                                        
                                        <td>${AdminBean.getLiv2().getLivre(empr.getIsbn()).getTitre()}</td>
                                        <td>${AdminBean.getLiv2().getLivre(empr.getIsbn()).getIsbn()}</td>
                                        <td>${AdminBean.getLiv2().getLivre(empr.getIsbn()).getDateemp()}</td>
                                        <td>${AdminBean.getUser2().getUser(empr.getCode()).getNom()} ${AdminBean.getUser2().getUser(reserv.getCode()).getPrenom()}</td>
                                        <td>${AdminBean.getUser2().getUser(empr.getCode()).getEmail()}</td>
                                        
                                    </tr>
                                    </c:forEach>
                                    
                                    </tbody>
                                    <tfoot>
                                   <!-- <tr>
                                        <th></th>
                                        <th><i>4 People</i></th>
                                        <th></th>
                                        <th><i>1 Approved</i></th>
                                    </tr>-->
                                    </tfoot>
                                </table>
                            </div>
                        </div>
                                        
                                    </div>
                                </div>
                            </div>
									
                                    </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
                              
                                </div>
                                
                            
                     
                            
                        </div>
                    </div>
                </div>
                <!--END CONTENT-->
                <!--BEGIN FOOTER-->
                <div id="footer">
                    <div class="copyright">
                        <a href="http://themifycloud.com">2014 Â© KAdmin Responsive Multi-Purpose Template</a></div>
                </div>
                <!--END FOOTER-->
            </div>
            <!--END PAGE WRAPPER-->
        </div>
    </div>
    <script src="script/jquery-1.10.2.min.js"></script>
    <script src="script/jquery-migrate-1.2.1.min.js"></script>
    <script src="script/jquery-ui.js"></script>
    <script src="script/bootstrap.min.js"></script>
    <script src="script/bootstrap-hover-dropdown.js"></script>
    <script src="script/html5shiv.js"></script>
    <script src="script/respond.min.js"></script>
    <script src="script/jquery.metisMenu.js"></script>
    <script src="script/jquery.slimscroll.js"></script>
    <script src="script/jquery.cookie.js"></script>
    <script src="script/icheck.min.js"></script>
    <script src="script/custom.min.js"></script>
    <script src="script/jquery.news-ticker.js"></script>
    <script src="script/jquery.menu.js"></script>
    <script src="script/pace.min.js"></script>
    <script src="script/holder.js"></script>
    <script src="script/responsive-tabs.js"></script>
    <script src="script/jquery.flot.js"></script>
    <script src="script/jquery.flot.categories.js"></script>
    <script src="script/jquery.flot.pie.js"></script>
    <script src="script/jquery.flot.tooltip.js"></script>
    <script src="script/jquery.flot.resize.js"></script>
    <script src="script/jquery.flot.fillbetween.js"></script>
    <script src="script/jquery.flot.stack.js"></script>
    <script src="script/jquery.flot.spline.js"></script>
    <script src="script/zabuto_calendar.min.js"></script>

    <script src="script/index.js"></script>
    <!--LOADING SCRIPTS FOR CHARTS-->
    <script src="script/highcharts.js"></script>
    <script src="script/data.js"></script>
    <script src="script/drilldown.js"></script>
    <script src="script/exporting.js"></script>
    <script src="script/highcharts-more.js"></script>
    <script src="script/charts-highchart-pie.js"></script>
    <script src="script/charts-highchart-more.js"></script>
    <!--CORE JAVASCRIPT-->
    <script src="script/main.js"></script>
    <script>        (function (i, s, o, g, r, a, m) {
            i['GoogleAnalyticsObject'] = r;
            i[r] = i[r] || function () {
                (i[r].q = i[r].q || []).push(arguments)
            }, i[r].l = 1 * new Date();
            a = s.createElement(o),
            m = s.getElementsByTagName(o)[0];
            a.async = 1;
            a.src = g;
            m.parentNode.insertBefore(a, m)
        })(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');
        ga('create', 'UA-145464-12', 'auto');
        ga('send', 'pageview');


</script>
</body>
</html>

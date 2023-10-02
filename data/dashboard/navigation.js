const navigation = {
	root: [{
		title: "navigation.root.accounts",
		url: "/",
		iconType: "user-multi"
	}, {
		title: "navigation.root.websites",
		url: "/zones",
		iconType: "internet-browser"
	}, {
		title: "navigation.root.profile",
		url: "/profile",
		iconType: "user-outline"
	}, {
		title: "navigation.root.partners",
		url: "/partners/tenant",
		iconType: "carbon",
		hasPermission: function(g) {
			return (0, r.z1)(E.Mr)(g) && (0, $.z7)(g) && !!(0, $.z$)(g).length
		}
	}],
	partners: [{
		title: "navigation.partners.tenant",
		url: "/partners/tenant",
		iconType: "cloudflare-magic-wan"
	}, {
		title: "navigation.partners.accounts",
		url: "/partners/account",
		iconType: "user-multi"
	}],
	profile: [{
		title: "navigation.profile.preferences",
		url: "/",
		iconType: "edit"
	}, {
		title: "navigation.profile.access_management",
		url: "/access-management",
		iconType: "lock",
		hasPermission: function(g) {
			return !!(0, r.z1)("oauth-access-management")(g)
		}
	}, {
		title: "navigation.profile.authentication",
		url: "/authentication",
		iconType: "key",
		hasPermission: function(g) {
			return !(0, ne.n3)() && !(0, r.z1)("oauth-access-management")(g)
		}
	}, {
		title: "navigation.profile.api_tokens",
		url: "/api-tokens",
		iconType: "script"
	}, {
		title: "navigation.profile.sessions",
		url: "/sessions",
		iconType: "time",
		hasPermission: function(g) {
			return !(0, r.z1)("oauth-access-management")(g)
		}
	}],
	account: [{
		title: "navigation.account.home",
		url: "/",
		iconType: "home",
		labels: ["beta"],
		hasPermission: function(g) {
			return !!(0, r.z1)("dash-account-home-v2")(g)
		}
	}, {
		title: "navigation.root.websites",
		url: function(g) {
			return (0, r.z1)("dash-account-home-v2")(g) ? "/websites" : "/"
		},
		iconType: "internet-browser"
	}, {
		title: "navigation.account.discover",
		url: "/discover",
		iconType: "discover",
		hasPermission: function(g) {
			return (0, r.z1)("dx-discover-page-flipper")(g) === !0
		}
	}, {
		title: function(g) {
			return (0, r.z1)("registrar-account-home-copy-experiment")(g) === "registrar" ? "navigation.account.registrar" : "navigation.account.registrar.buy_domains"
		},
		url: "/domains",
		iconType: "registrar-logo",
		pages: [{
			title: "navigation.account.registrar.manage_domains",
			url: "/domains"
		}, {
			title: "navigation.account.registrar.transfer_domains",
			url: "/domains/transfer",
			hasPermission: function(g) {
				return (0, l.YV)(g)
			}
		}, {
			title: "navigation.account.registrar.register_domains",
			url: "/domains/register"
		}, {
			title: "navigation.account.registrar.domain_protection",
			url: "/domains/protection",
			labels: ["beta"],
			hasPermission: function(g) {
				return (0, l.gw)(g)
			}
		}]
	}, {
		title: "navigation.common.analytics_and_logs",
		url: "/analytics",
		iconType: "chart",
		pages: [{
			title: "navigation.account.account_analytics",
			url: "/analytics",
			labels: ["beta"],
			hasPermission: function(g) {
				return (0, l.iY)(g)
			}
		}, {
			title: "navigation.account.network_analytics",
			url: "/network-analytics/all-traffic",
			hasPermission: function(g) {
				return (0, l.iY)(g) && (0, G.Ob)(g)
			}
		}, {
			title: "navigation.account.web_analytics",
			url: "/web-analytics",
			hasPermission: function(g) {
				return (0, l.iY)(g)
			}
		}, {
			title: "navigation.account.logs",
			url: "/logs",
			labels: ["new"],
			hasPermission: function(g) {
				return (0, l.iY)(g) && (0, h.S6)(g) && !!(0, r.z1)("account-logpush")(g)
			}
		}, {
			title: "navigation.account.carbon",
			url: "/carbon",
			hasPermission: function(g) {
				return (0, l.iY)(g) && !!(0, n.Le)(g, "account_analytics", "carbon_dashboard")
			}
		}, {
			title: "navigation.account.magic.network_monitoring",
			url: "/network-monitoring",
			hasPermission: function(g) {
				return (0, l.iY)(g) && !!(0, n.Le)(g, "account_analytics", "magic_network_monitoring")
			}
		}]
	}, {
		title: "navigation.account.security_center",
		url: "/security-center",
		iconType: "product-security-center",
		hasPermission: function(g) {
			return (0, l.iY)(g) && (0, j.xU)(g)
		},
		pages: [{
			title: "navigation.account.security_center.security_insights",
			url: "/security-center",
			hasPermission: function(g) {
				return (0, l.iY)(g) && (0, j.sL)(g)
			}
		}, {
			title: "navigation.account.security_center.security_analytics",
			url: "/security-center/analytics",
			labels: ["beta"],
			hasPermission: function(g) {
				return (0, l.iY)(g) && !!(0, r.z1)("account-level-security-analytics")(g) && (0, M.p1)(g)
			}
		}, {
			title: "navigation.account.security_center.security_events",
			url: "/security-center/events",
			labels: ["beta"],
			hasPermission: function(g) {
				return (0, l.iY)(g) && !!(0, r.z1)("account-level-security-analytics")(g) && (0, M.p1)(g)
			}
		}, {
			title: "navigation.account.security_center.infrastructure",
			url: "/security-center/inventory",
			hasPermission: function(g) {
				return (0, l.iY)(g) && (0, j.sL)(g)
			}
		}, {
			title: "navigation.account.security_center.investigate",
			url: "/security-center/investigate",
			hasPermission: function(g) {
				return (0, l.iY)(g) && (0, j.TT)(g)
			}
		}, {
			title: "navigation.account.security_center.reports",
			url: "/security-center/reports",
			labels: ["beta"],
			hasPermission: function(g) {
				return (0, l.iY)(g) && (0, j.jD)(g)
			}
		}, {
			title: "navigation.account.security_center.brand_protection",
			url: "/security-center/brand-protection",
			labels: ["beta"],
			hasPermission: function(g) {
				return (0, l.iY)(g) && (0, j.BU)(g)
			}
		}, {
			title: "navigation.account.security_center.cfone_priorities",
			url: "/cloudforce-one/priorities",
			hasPermission: function(g) {
				return (0, l.iY)(g) && (0, j.fs)(g)
			}
		}, {
			title: "navigation.account.security_center.cfone_reports",
			url: "/cloudforce-one/reports",
			hasPermission: function(g) {
				return (0, l.iY)(g) && (0, j.Bc)(g)
			}
		}, {
			title: "navigation.account.security_center.cfone_requests",
			url: "/cloudforce-one/requests",
			hasPermission: function(g) {
				return (0, l.iY)(g) && (0, j.gA)(g)
			}
		}]
	}, {
		title: "navigation.account.request_tracer",
		url: "/trace",
		iconType: "trace",
		testId: "trace-link",
		labels: ["beta"],
		hasPermission: H.T
	}, {
		title: "navigation.account.group_title.application_services",
		url: "/",
		labels: ["separator"],
		iconType: "internet-browser"
	}, {
		title: "navigation.account.waf",
		url: "/application-security/waf",
		iconType: "cloudflare-security-application",
		hasPermission: function(g) {
			return !!(0, l.AB)(g)
		},
		tabs: w.DW
	}, {
		title: "navigation.account.dns_firewall",
		url: "/dns-firewall",
		iconType: "reliability-dns",
		testId: "sidenav-dns_firewall-link",
		hasPermission: function(g) {
			return (0, M.Ci)(g)
		}
	}, {
		title: "navigation.account.turnstile",
		url: "/turnstile",
		iconType: "turnstile",
		testId: "sidenav-turnstile-link",
		labels: ["beta"],
		hasPermission: function(g) {
			return (0, l.iY)(g) && !!(0, r.z1)("managed-challenge-ui")(g)
		}
	}, {
		title: "navigation.account.group_title.network_services",
		url: "/",
		labels: ["separator"],
		iconType: "internet-browser"
	}, {
		title: "navigation.account.magic_transit",
		url: "/magic-transit",
		iconType: "magic-transit-logo",
		hasPermission: function(g) {
			return (0, l.iY)(g) && !!(0, n.Le)(g, "magic_transit", "mt_home")
		},
		pages: [{
			title: "navigation.account.magic_connectors.configuration",
			url: "/magic-transit/configuration",
			tabs: S.Lx.concat(S.SF, S.Jg)
		}, {
			title: "navigation.account.magic.tunnel_healthcheck",
			url: "/magic-transit/tunnel-healthchecks"
		}]
	}, {
		title: "navigation.account.magic_firewall",
		url: "/network-security/magic_firewall",
		iconType: "magic-firewall",
		hasPermission: function(g) {
			return !!(0, l.zJ)(g)
		},
		tabs: w.$$
	}, {
		title: "navigation.account.l3l4.ddos",
		url: "/network-security/ddos",
		iconType: "cloudflare-security-network",
		hasPermission: function(g) {
			var Ae = !!(0, l.Wq)(g) && !!(0, l.fO)(g);
			return !!(0, l.Tk)(g) || Ae
		},
		tabs: w.Dn
	}, {
		title: "navigation.account.ip_addresses",
		url: "/ip-addresses/ip-prefixes",
		iconType: "network",
		pages: [{
			title: "navigation.account.ip_addresses.ip_prefixes",
			url: "/ip-addresses/ip-prefixes",
			hasPermission: function(g) {
				return (0, l.iY)(g) && !!(0, n.Le)(g, "addressing", "ip_prefixes")
			}
		}, {
			title: "navigation.account.ip_addresses.proxy-ips",
			url: "/ip-addresses/proxy-ips",
			hasPermission: function(g) {
				return (0, l.iY)(g) && !!(0, r.z1)("proxy-ips-ui")(g)
			}
		}],
		hasPermission: function(g) {
			return (0, l.iY)(g) && !!(0, n.Le)(g, "addressing", "ip_prefixes")
		}
	}, {
		title: "navigation.account.group_title.cloudflare_one",
		url: "/",
		labels: ["separator"],
		iconType: "internet-browser"
	}, {
		title: "navigation.account.zero_trust",
		url: function() {
			var g = (0, b.e1)(),
				Ae = "https://one.dash.cloudflare.com";
			return g ? "".concat(Ae, "/").concat(g, "/") : Ae
		},
		iconType: "cloudflare-zero-trust",
		labels: function(g) {
			return (0, r.z1)("zt-sidebar")(g) ? [] : ["external-link"]
		},
		hasPermission: function(g) {
			return (0, l.iY)(g)
		}
	}, {
		title: "navigation.account.magic_wan",
		url: "/magic-wan",
		iconType: "cloudflare-magic-wan",
		hasPermission: function(g) {
			return (0, l.iY)(g) && !!(0, n.Le)(g, "magic_wan", "mw_home") || !!(0, n.Le)(g, "magic_wan", "mc_home")
		},
		pages: [{
			title: "navigation.account.magic_connectors.sites",
			url: "/magic-wan/sites",
			labels: ["beta"],
			hasPermission: function(g) {
				return (0, l.iY)(g) && !!(0, n.Le)(g, "magic_wan", "mc_home")
			}
		}, {
			title: "navigation.account.magic_connectors.configuration",
			url: "/magic-wan/configuration",
			tabs: S.SF.concat(S.Jg)
		}, {
			title: "navigation.account.magic.tunnel_healthcheck",
			url: "/magic-wan/tunnel-healthchecks"
		}]
	}, {
		hasPermission: function(g) {
			return (0, l.iY)(g)
		},
		iconType: "email-forwarding",
		title: "navigation.account.area_one",
		url: "/area1",
		pages: [{
			title: "navigation.common.overview",
			url: "/area1"
		}, {
			title: "navigation.account.area_one.retro_scan",
			url: "/area1/retro-scan",
			hasPermission: function(g) {
				return (0, r.z1)("area-1-retro-scan")(g) === !0
			}
		}, {
			title: "navigation.account.area_one.dashboard",
			url: "https://horizon.area1security.com/api/cf-auth/login",
			labels: ["external-link"]
		}]
	}, {
		title: "navigation.account.group_title.developer_platform",
		url: "/",
		labels: ["separator"],
		iconType: "internet-browser"
	}, {
		title: "navigation.account.workers_and_pages",
		url: "/workers-and-pages",
		additionalMatchUrls: ["/workers", "/pages"],
		iconType: "workers-pages",
		hasPermission: function(g) {
			return (0, l.iY)(g)
		},
		testId: "sidenav-workers-pages-link",
		pages: [{
			title: "navigation.common.overview",
			url: "/workers-and-pages"
		}, {
			title: "navigation.account.workers.kv",
			url: "/workers/kv/namespaces"
		}, {
			title: "navigation.account.workers.queues",
			url: "/workers/queues",
			labels: ["beta"],
			hasPermission: function(g) {
				return !!(0, r.z1)("queues-ui")(g)
			},
			testId: "sidenav-queues-link"
		}, {
			title: "navigation.account.workers.d1",
			url: "/workers/d1",
			labels: function(g) {
				return (0, r.z1)("enable-d1-beta-labels")(g) ? ["beta"] : ["alpha"]
			}
		}, {
			title: "navigation.account.workers.constellation",
			url: "/workers/constellation",
			labels: ["beta"],
			hasPermission: function(g) {
				return !!(0, r.z1)("constellation-ui")(g) && !(0, n.RO)(g)
			}
		}, {
			title: "navigation.account.workers.hyperdrive",
			url: "/workers/hyperdrive",
			labels: ["beta"],
			hasPermission: function(g) {
				return !!(0, r.z1)("hyperdrive-ui")(g)
			}
		}, {
			title: "navigation.account.workers.plans",
			url: "/workers/plans",
			hasPermission: function(g) {
				var Ae = (0, I.tJ)(g);
				return !(0, ae.ky)(Ae, [o.uD.UnboundEnterpriseTrial])
			}
		}]
	}, {
		title: "navigation.account.workers_for_platforms",
		url: "/workers-for-platforms",
		iconType: "workers-for-platforms",
		testId: "workers-for-platforms",
		hasPermission: function(g) {
			return !!(0, r.z1)("workers-for-platforms")(g) && (0, l.iY)(g) && ((0, M.p1)(g) || !!(0, n.Le)(g, "workers", "workers_for_saas"))
		}
	}, {
		title: "navigation.account.workers.ai",
		url: "/ai",
		iconType: "workers-constellation",
		labels: ["beta"],
		hasPermission: function(g) {
			return !!(0, n.RO)(g) || !!(0, n.B)(g)
		},
		testId: "sidenav-ai-link",
		pages: [{
			title: "navigation.account.workers.ai.workers-ai",
			url: "/ai/workers-ai",
			testId: "sidenav-ai-workers-link",
			hasPermission: function(g) {
				return (0, n.RO)(g)
			}
		}, {
			title: "navigation.account.workers.ai.vectorize",
			url: "/ai/vectorize",
			testId: "sidenav-ai-vectorize-link",
			hasPermission: function(g) {
				return (0, n.RO)(g)
			}
		}, {
			title: "navigation.account.workers.ai.ai-gateway",
			url: "/ai/ai-gateway/general",
			testId: "sidenav-ai-gateway-link",
			hasPermission: function(g) {
				return !!(0, n.B)(g)
			}
		}]
	}, {
		title: "navigation.account.r2",
		url: "/r2",
		iconType: "r2",
		testId: "sidenav-r2-link",
		hasPermission: function(g) {
			return (0, l.iY)(g)
		},
		pages: [{
			title: "navigation.account.r2.overview",
			url: "/r2/overview",
			hasPermission: function(g) {
				return (0, l.o_)(g)
			}
		}, {
			title: "navigation.account.r2_slurper",
			url: "/r2/slurper",
			testId: "sidenav-r2Migrator-link",
			hasPermission: function(g) {
				return (0, l.o_)(g)
			}
		}]
	}, {
		title: "navigation.account.stream",
		url: "/stream",
		iconType: "stream",
		hasPermission: function(g) {
			return (0, l.iY)(g)
		},
		pages: [{
			title: "navigation.account.stream.videos",
			url: "/stream/videos",
			hasPermission: function(g) {
				return (0, l.hv)(g)
			}
		}, {
			title: "navigation.account.stream.live_inputs",
			url: "/stream/inputs",
			hasPermission: function(g) {
				return (0, l.hv)(g)
			}
		}, {
			title: "navigation.common.analytics",
			url: "/stream/analytics",
			labels: ["new"],
			hasPermission: function(g) {
				return (0, l.hv)(g)
			}
		}]
	}, {
		title: "navigation.account.images",
		url: "/images",
		iconType: "image",
		testId: "sidenav-images-link",
		hasPermission: function(g) {
			return (0, l.iY)(g)
		},
		pages: [{
			title: "navigation.account.images.overview",
			url: "/images/images",
			hasPermission: function(g) {
				return (0, l.IU)(g)
			}
		}, {
			title: "navigation.account.images.variants",
			url: "/images/variants",
			hasPermission: function(g) {
				return (0, l.IU)(g)
			}
		}, {
			title: "navigation.account.images.keys",
			url: "/images/keys",
			hasPermission: function(g) {
				return (0, l.IU)(g)
			}
		}, {
			title: "navigation.account.images.sourcing_kit",
			url: "/images/sourcing-kit",
			testId: "sidenav-sourcingkit-link",
			hasPermission: function(g) {
				return (0, l.IU)(g)
			},
			labels: ["beta"]
		}, {
			title: "navigation.account.images.delivery_zones",
			url: "/images/delivery-zones",
			testId: "sidenav-delivery-zones-link",
			hasPermission: function(g) {
				return (0, l.IU)(g) && (0, _.b8)(g)
			},
			labels: ["new"]
		}]
	}, {
		title: "navigation.account.calls",
		url: "/calls",
		labels: ["beta"],
		iconType: "user-multi",
		hasPermission: function(g) {
			return (0, l.iY)(g) && (!!(0, n.Le)(g, "calls", "enabled") || !!(0, n.Le)(g, "Calls", "enabled"))
		}
	}, {
		title: "navigation.account.group_title.account_management",
		url: "/",
		labels: ["separator"],
		iconType: "internet-browser"
	}, {
		title: "navigation.account.manage_account",
		url: "/members",
		iconType: "gear",
		testId: "manage-account-link",
		pages: [{
			title: "navigation.account.members",
			url: "/members",
			testId: "account-homepage-members",
			hasPermission: function(g) {
				return (0, l.iY)(g)
			}
		}, {
			title: "navigation.account.api_tokens",
			url: "/api-tokens",
			testId: "account-homepage-api-tokens",
			hasPermission: function(g) {
				return (0, l.iY)(g) && !!(0, r.z1)("account-owned-api-tokens")(g)
			}
		}, {
			title: "navigation.account.audit_log",
			url: "/audit-log",
			testId: "account-homepage-audit-logs",
			hasPermission: function(g) {
				return (0, q.b)(g) ? (0, l.iY)(g) : (0, n.Yj)(g)("auditlogs").read
			}
		}, {
			title: "navigation.account.billing",
			url: "/billing",
			testId: "account-homepage-billing",
			hasPermission: function(g) {
				return (0, l.iY)(g)
			}
		}, {
			title: "navigation.account.configurations",
			url: "/configurations",
			testId: "account-homepage-configurations",
			hasPermission: function(g) {
				return (0, l.iY)(g)
			}
		}]
	}, {
		title: "navigation.account.notifications",
		url: "/notifications",
		iconType: "notifications",
		hasPermission: function(g) {
			return (0, l.iY)(g)
		}
	}, {
		title: "account.bulk_redirects.title",
		url: "/bulk-redirects",
		iconType: "filter",
		labels: ["beta"],
		hasPermission: function(g) {
			return (0, l.iY)(g)
		}
	}],
	zone: [{
		title: "navigation.common.overview",
		url: "/",
		iconType: "clipboard",
		testId: "zone-navigation-link-overview",
		navigationType: "global-settings"
	}, {
		title: "navigation.common.analytics_and_logs",
		url: "/analytics",
		iconType: "chart",
		testId: "zone-navigation-link-analytics",
		navigationType: "both",
		hasPermission: function(g) {
			return (0, l.$n)(g, "analytics", "analytics")
		},
		pages: [{
			title: "navigation.zone.analytics.traffic",
			url: "/analytics/traffic",
			navigationType: "both",
			hasPermission: function(g) {
				return !(0, M.yD)(g)
			}
		}, {
			title: "navigation.zone.analytics.security",
			url: "/analytics/security",
			navigationType: "global-settings",
			hasPermission: function(g) {
				return !(0, M.yD)(g)
			}
		}, {
			title: "navigation.zone.analytics.performance",
			url: "/analytics/performance",
			navigationType: "global-settings",
			hasPermission: function(g) {
				return !(0, M.yD)(g)
			}
		}, {
			title: "navigation.zone.analytics.origin_reachability",
			url: "/analytics/originReachability",
			navigationType: "global-settings",
			hasPermission: function(g) {
				var Ae = (0, d.nA)(g);
				return Ae ? !!(!(0, M.yD)(g) && !!(0, d.ZB)(g, "origin_reachability_dash", "dash_view") && (0, d.tU)(Ae, "enterprise") && !!(0, Z.Ek)(g, "httpRequestsAdaptiveGroups")) : !1
			}
		}, {
			title: "navigation.zone.analytics.edge_reachability",
			url: "/analytics/edgeReachability",
			navigationType: "global-settings",
			hasPermission: function(g) {
				var Ae = (0, d.nA)(g);
				return Ae ? !!(!(0, M.yD)(g) && !!(0, d.ZB)(g, "edge_reachability_dash", "dash_view") && (0, d.tU)(Ae, "enterprise") && !!(0, Z.Ek)(g, "nelReportsAdaptiveGroups")) : !1
			}
		}, {
			title: "navigation.zone.analytics.dns",
			navigationType: "global-settings",
			url: "/analytics/dns"
		}, {
			title: "navigation.zone.analytics.workers",
			url: "/analytics/workers",
			navigationType: "global-settings",
			hasPermission: function(g) {
				return !(0, M.yD)(g)
			}
		}, {
			title: "navigation.zone.analytics.logs",
			url: "/analytics/logs",
			navigationType: "both",
			hasPermission: function(g) {
				return Object.values((0, h.H_)(g)).some(Boolean)
			}
		}, {
			title: "navigation.zone.analytics.instant_logs",
			url: "/analytics/instant-logs",
			navigationType: "global-settings",
			hasPermission: function(g) {
				return !(0, M.yD)(g) && !!(0, d.ZB)(g, "logs", "instant_log") && !!(0, M.rV)(g, "logpush.max_instant_logs_jobs_allowed")
			}
		}]
	}, {
		title: "navigation.zone.zone_versioning",
		url: "/versioning",
		navigationType: "both",
		iconType: "git-branch",
		testId: "zone-navigation-link-zone-versioning",
		tabs: m.bB,
		hasPermission: function(g) {
			return !(0, M.yD)(g) && (0, J.m7)(g)
		}
	}, {
		title: "navigation.zone.dns",
		url: "/dns",
		navigationType: "global-settings",
		iconType: "reliability-dns",
		testId: "zone-navigation-link-dns",
		hasPermission: function(g) {
			return (0, l.$n)(g, "dns_records", "dns-record")
		},
		pages: [{
			title: "navigation.zone.dns.records",
			url: "/dns/records",
			testId: "zone-navigation-link-dns-records",
			navigationType: "global-settings"
		}, {
			title: "navigation.zone.dns.settings",
			url: "/dns/settings",
			testId: "zone-navigation-link-dns-settings",
			navigationType: "global-settings"
		}]
	}, {
		title: "navigation.zone.email",
		url: "/email",
		navigationType: "global-settings",
		iconType: "email-forwarding",
		testId: "zone-navigation-link-email",
		pages: [{
			title: "navigation.zone.email.routing",
			navigationType: "global-settings",
			url: "/email/routing",
			tabs: y.hg,
			hasPermission: function(g) {
				return (0, l.iY)(g) && !(0, M.yD)(g) && (0, l.$n)(g, "dns_records", "dns-record")
			}
		}, {
			title: "navigation.zone.email.dmarc-reports",
			navigationType: "global-settings",
			url: "/email/dmarc-management",
			labels: ["beta"],
			hasPermission: function(g) {
				return (0, l.$n)(g, "dns_records", "dns-record") && !!(0, d.ZB)(g, "email", "dmarc_visible")
			}
		}, {
			title: "navigation.zone.email.security",
			navigationType: "global-settings",
			url: "/email/security"
		}]
	}, {
		title: "navigation.zone.spectrum",
		url: "/spectrum",
		navigationType: "global-settings",
		iconType: "spectrum",
		testId: "zone-navigation-link-spectrum",
		hasPermission: function(g) {
			var Ae = (0, d.nA)(g);
			if ((0, M.yD)(g) || !(0, l.wB)(g, "zone_settings", "spectrum.app") || !Ae) return !1;
			var Oe = !!((0, ge.l8)(g) || (0, d.DQ)(g)),
				V = !!(0, d.ZB)(g, "spectrum", "enabled"),
				p = !!(0, d.Ns)(Ae);
			return V || Oe || !p
		}
	}, {
		title: "navigation.zone.ssl-tls",
		url: "/ssl-tls",
		iconType: "lock",
		testId: "zone-navigation-link-ssl-tls",
		navigationType: "both",
		hasPermission: function(g) {
			return !(0, M.yD)(g) && (0, l.$n)(g, "ssl", "ssl.cert")
		},
		pages: [{
			title: "navigation.common.overview",
			url: "/ssl-tls",
			navigationType: "both"
		}, {
			title: "navigation.zone.ssl-tls.edge_certs",
			url: "/ssl-tls/edge-certificates",
			navigationType: "both"
		}, {
			title: "navigation.zone.ssl-tls.staging_certs",
			url: "/ssl-tls/staging-certificates",
			navigationType: "global-settings",
			hasPermission: function(g) {
				return (0, M.$f)(g, "staging_certificates")
			}
		}, {
			title: "navigation.zone.ssl-tls.client_certs",
			url: "/ssl-tls/client-certificates",
			navigationType: "global-settings",
			hasPermission: function(g) {
				return !!(0, r.z1)("client-certificates")(g) || !!(0, d.ZB)(g, "ssl", "client_certificates")
			}
		}, {
			title: "navigation.zone.ssl-tls.origin_server",
			navigationType: "global-settings",
			url: "/ssl-tls/origin"
		}, {
			title: "navigation.zone.ssl-tls.custom_hostnames",
			navigationType: "global-settings",
			url: "/ssl-tls/custom-hostnames"
		}]
	}, {
		title: "navigation.zone.security",
		url: "/security",
		iconType: "shield",
		testId: "zone-navigation-link-security",
		navigationType: "version",
		hasPermission: function(g) {
			return !(0, M.yD)(g) && (0, l.$n)(g, "waf", "firewall.rule") || (0, l.$n)(g, "page_shield", "script-monitor")
		},
		pages: [{
			title: "navigation.zone.security.analytics",
			navigationType: "version",
			url: "/security/analytics",
			labels: ["beta"],
			hasPermission: function(g) {
				return (0, T.B_)(g) && (0, l.$n)(g, "waf", "firewall.rule")
			}
		}, {
			title: "navigation.zone.security.events",
			url: "/security/events",
			navigationType: "version",
			hasPermission: function(g) {
				return (0, l.$n)(g, "waf", "firewall.rule")
			}
		}, {
			title: "navigation.zone.security.waf",
			url: "/security/waf",
			navigationType: "version",
			tabs: N.gn,
			hasPermission: function(g) {
				return (0, l.$n)(g, "waf", "firewall.rule")
			}
		}, {
			title: "navigation.zone.security.page_shield",
			navigationType: "global-settings",
			url: "/security/page-shield",
			tabs: N.mt,
			hasPermission: function(g) {
				return (0, l.$n)(g, "page_shield", "script-monitor")
			}
		}, {
			title: "navigation.zone.security.bots",
			url: "/security/bots",
			navigationType: "version",
			hasPermission: function(g) {
				return (0, l.$n)(g, "waf", "firewall.rule")
			}
		}, {
			title: "navigation.zone.security.data",
			url: "/security/data",
			navigationType: "global-settings",
			hasPermission: function(g) {
				return (0, M.du)(g, "rulesets.fw_global_rulesets_execute_firewall_managed_cramr_allowed") && (0, l.$n)(g, "waf", "firewall.rule")
			}
		}, {
			title: "navigation.zone.security.api_shield",
			url: "/security/api-shield",
			labels: ["new"],
			navigationType: "global-settings",
			hasPermission: function(g) {
				var Ae = (0, d.nA)(g);
				return Ae ? !!(0, d.ZB)(g, "firewall", "api_shield_tab") && (0, d.tU)(Ae, "business") && (0, l.$n)(g, "waf", "firewall.rule") : !1
			},
			tabs: N.Dw
		}, {
			title: "navigation.zone.security.ddos",
			url: "/security/ddos",
			navigationType: "version",
			hasPermission: function(g) {
				return (0, l.$n)(g, "waf", "firewall.rule")
			}
		}, {
			title: "navigation.zone.security.settings",
			url: "/security/settings",
			navigationType: "version",
			hasPermission: function(g) {
				return (0, l.$n)(g, "waf", "firewall.rule")
			}
		}]
	}, {
		title: "navigation.zone.access",
		url: "/access",
		navigationType: "global-settings",
		iconType: "cloudflare-access",
		testId: "zone-navigation-link-access",
		hasPermission: function(g) {
			return !(0, M.yD)(g) && ((0, l.wB)(g, "access", "access.app") || (0, l.wB)(g, "access", "access.zone.app"))
		}
	}, {
		title: "navigation.zone.speed",
		url: "/speed",
		iconType: "bolt",
		testId: "zone-navigation-link-speed",
		navigationType: "version",
		hasPermission: function(g) {
			return !(0, M.yD)(g) && (0, l.$n)(g, "zone_settings", "setting")
		},
		pages: [{
			title: "navigation.zone.speed.test",
			url: "/speed/test",
			navigationType: "version",
			labels: ["beta"]
		}, {
			title: "navigation.zone.speed.optimization",
			url: "/speed/optimization",
			navigationType: "version"
		}]
	}, {
		title: "navigation.zone.caching",
		url: "/caching",
		iconType: "drive",
		testId: "zone-navigation-link-caching",
		navigationType: "global-settings",
		hasPermission: function(g) {
			return !(0, M.yD)(g) && (0, l.$n)(g, "zone_settings", "setting")
		},
		pages: [{
			title: "navigation.common.overview",
			navigationType: "global-settings",
			url: "/caching",
			tabs: C
		}, {
			title: "navigation.zone.caching.configuration",
			url: "/caching/configuration",
			navigationType: "both"
		}, {
			title: "navigation.zone.caching.cache_rules",
			url: "/caching/cache-rules",
			navigationType: "version",
			labels: ["beta"],
			hasPermission: function(g) {
				return (0, l.$n)(g, "waf", "firewall.rule") || (0, l.$n)(g, "zone_settings", "page-rule")
			}
		}, {
			title: "navigation.zone.caching.tiered_cache",
			url: "/caching/tiered-cache",
			navigationType: "version",
			hasPermission: function(g) {
				return (0, l.iY)(g)
			}
		}, {
			title: "navigation.zone.caching.cache_reserve",
			navigationType: "global-settings",
			url: "/caching/cache-reserve"
		}]
	}, {
		title: "navigation.zone.workers",
		url: "/workers",
		iconType: "edgeworker",
		testId: "zone-navigation-link-workers",
		navigationType: "version",
		hasPermission: function(g) {
			return !(0, M.yD)(g) && (0, l.wB)(g, "worker", "worker.route")
		}
	}, {
		title: "navigation.zone.rules",
		url: "/rules",
		iconType: "filter",
		testId: "zone-navigation-link-page-rules",
		navigationType: "version",
		hasPermission: function(g) {
			return !(0, M.yD)(g) && (0, l.$n)(g, "zone_settings", "page-rule")
		},
		pages: [{
			title: "navigation.zone.rules.page_rules",
			url: "/rules",
			navigationType: "version"
		}, {
			title: "navigation.zone.rules.snippets",
			url: "/rules/snippets",
			labels: ["alpha"],
			navigationType: "version",
			hasPermission: function(g) {
				return !!(0, x.GM)(g) && (0, l.$n)(g, "waf", "page-rule", "read")
			}
		}, {
			title: "navigation.zone.rules.configuration_rules",
			labels: ["beta"],
			url: "/rules/configuration-rules",
			navigationType: "version",
			hasPermission: function(g) {
				return (0, l.$n)(g, "waf", "firewall.rule") || (0, l.$n)(g, "zone_settings", "page-rule")
			}
		}, {
			title: "navigation.zone.rules.transform_rules",
			url: "/rules/transform-rules",
			navigationType: "version",
			tabs: f
		}, {
			title: "navigation.zone.rules.redirect_rules",
			labels: ["beta"],
			url: "/rules/redirect-rules",
			navigationType: "version",
			hasPermission: function(g) {
				return (0, l.$n)(g, "zone_settings", "page-rule")
			}
		}, {
			title: "navigation.zone.rules.origin_rules",
			url: "/rules/origin-rules",
			labels: ["beta"],
			navigationType: "version",
			hasPermission: function(g) {
				return (0, l.$n)(g, "waf", "page-rule", "read")
			}
		}, {
			title: "navigation.zone.rules.compression_rules",
			labels: ["new"],
			url: "/rules/compression-rules",
			navigationType: "version",
			hasPermission: function(g) {
				return (0, l.$n)(g, "waf", "page-rule", "read") && !!(0, M.rV)(g, "rulesets.response_compression_max_rules") && !!(0, r.z1)("compression-rules")(g)
			}
		}, {
			title: "navigation.zone.rules.settings",
			url: "/rules/settings",
			navigationType: "version",
			hasPermission: function(g) {
				return (0, l.$n)(g, "waf", "page-rule", "read")
			}
		}]
	}, {
		title: "navigation.zone.network",
		url: "/network",
		iconType: "network",
		testId: "zone-navigation-link-network",
		navigationType: "version",
		hasPermission: function(g) {
			return !(0, M.yD)(g) && (0, l.$n)(g, "zone_settings", "setting")
		}
	}, {
		title: "navigation.zone.traffic",
		url: "/traffic",
		iconType: "reliability-load-balancer",
		testId: "zone-navigation-link-traffic",
		navigationType: "version",
		hasPermission: function(g) {
			return (0, l.$n)(g, "lb", "load-balancer") || (0, l.$n)(g, "waitingroom", "waiting-room")
		},
		pages: [{
			title: "navigation.zone.traffic.argo",
			url: "/traffic",
			navigationType: "version",
			hasPermission: function(g) {
				return !(0, M.yD)(g)
			}
		}, {
			title: "navigation.zone.traffic.load_balancing",
			url: "/traffic/load-balancing",
			navigationType: "global-settings",
			hasPermission: function(g) {
				return (0, l.iY)(g)
			}
		}, {
			title: "navigation.zone.traffic.load_balancing_analytics",
			url: "/traffic/load-balancing-analytics",
			navigationType: "global-settings",
			hasPermission: function(g) {
				return (0, l.iY)(g)
			}
		}, {
			title: "navigation.zone.traffic.health_checks",
			url: "/traffic/health-checks",
			navigationType: "global-settings",
			hasPermission: function(g) {
				return !(0, M.yD)(g)
			}
		}, {
			title: "navigation.zone.traffic.health_check_analytics",
			url: "/traffic/health-check-analytics",
			navigationType: "global-settings",
			hasPermission: function(g) {
				return !(0, M.yD)(g) && !!(0, Z.Ek)(g, "healthCheckEventsAdaptiveGroups")
			}
		}, {
			title: "navigation.zone.traffic.waiting_rooms",
			url: "/traffic/waiting-rooms",
			navigationType: "global-settings",
			hasPermission: function(g) {
				return !(0, M.yD)(g) && ((0, M.du)(g, "waiting_rooms.allowed") || !!(0, d.ZB)(g, "waitingroomaccessfeatureflipper", "waiting_rooms_ga"))
			}
		}]
	}, {
		title: "navigation.zone.custom_pages",
		url: "/custom-pages",
		iconType: "wrench",
		testId: "zone-navigation-link-custom-pages",
		navigationType: "version",
		hasPermission: function(g) {
			return !(0, M.yD)(g) && (0, l.$n)(g, "zone_settings", "custom-page")
		}
	}, {
		title: "navigation.zone.apps",
		url: "/apps",
		navigationType: "global-settings",
		iconType: "platform-apps",
		testId: "zone-navigation-link-apps",
		hasPermission: function(g) {
			return !(0, M.yD)(g) && (0, l.$n)(g, "app", "com.cloudflare.api.app.manage", "edit")
		}
	}, {
		title: "navigation.zone.scrape_shield",
		url: "/content-protection",
		iconType: "file",
		testId: "zone-navigation-link-content-protection",
		navigationType: "version",
		hasPermission: function(g) {
			return !(0, M.yD)(g) && (0, l.$n)(g, "zone_settings", "setting")
		}
	}, {
		title: "navigation.zone.zaraz",
		url: "/zaraz",
		navigationType: "global-settings",
		labels: function(g) {
			var Ae = [];
			return Ae
		},
		iconType: "zaraz",
		testId: "zone-navigation-link-zaraz",
		hasPermission: function(g) {
			return !(0, M.yD)(g) && (0, l.$n)(g, "zaraz", "zaraz")
		},
		pages: [{
			title: "navigation.zone.zaraz.tools.configuration",
			navigationType: "global-settings",
			url: "/zaraz/tools-config",
			tabs: D.az
		}, {
			title: "navigation.zone.zaraz.consent",
			navigationType: "global-settings",
			url: "/zaraz/consent"
		}, {
			title: "navigation.zone.zaraz.history",
			navigationType: "global-settings",
			url: "/zaraz/history"
		}, {
			title: "navigation.zone.zaraz.monitoring",
			navigationType: "global-settings",
			url: "/zaraz/monitoring"
		}, {
			title: "navigation.zone.zaraz.settings",
			navigationType: "global-settings",
			url: "/zaraz/settings"
		}, {
			title: "navigation.zone.zaraz.plans",
			navigationType: "global-settings",
			url: "/zaraz/plans"
		}]
	}, {
		title: "navigation.zone.web3.title",
		url: "/web3",
		navigationType: "global-settings",
		iconType: "web3",
		labels: ["new"],
		hasPermission: function(g) {
			var Ae = (0, n.uF)(g),
				Oe = (Ae == null ? void 0 : Ae.roles) || [];
			return Oe.includes("Trust and Safety") ? !1 : !(0, M.yD)(g)
		}
	}],
	zeroTrust: [{
		url: function() {
			return (0, G.Uj)("home")
		},
		title: "navigation.account.zero_trust",
		iconType: "cloudflare-zero-trust"
	}, {
		url: function() {
			return (0, G.Uj)("analytics/access")
		},
		title: "navigation.account.zero_trust.analytics",
		iconType: "cloudflare-zero-trust"
	}, {
		url: function() {
			return (0, G.Uj)("gateway/locations")
		},
		title: "navigation.account.zero_trust.gateway",
		iconType: "cloudflare-zero-trust"
	}, {
		url: function() {
			return (0, G.Uj)("access/apps")
		},
		title: "navigation.account.zero_trust.access",
		iconType: "cloudflare-zero-trust"
	}, {
		url: function() {
			return (0, G.Uj)("team/devices")
		},
		title: "navigation.account.zero_trust.my_team",
		iconType: "cloudflare-zero-trust"
	}, {
		url: function() {
			return (0, G.Uj)("logs/admin")
		},
		title: "navigation.account.zero_trust.logs",
		iconType: "cloudflare-zero-trust"
	}, {
		url: function() {
			return (0, G.Uj)("settings")
		},
		title: "navigation.account.zero_trust.settings",
		iconType: "cloudflare-zero-trust"
	}],
	support: O.G,
	application: [{
		title: "navigation.zone.ssl-tls",
		url: "/ssl-tls",
		iconType: "lock",
		hasPermission: function(g) {
			return !(0, M.yD)(g) && (0, l.$n)(g, "ssl", "ssl.cert")
		},
		pages: [{
			title: "navigation.common.overview",
			url: "/ssl-tls"
		}, {
			title: "navigation.zone.ssl-tls.edge_certs",
			url: "/ssl-tls/edge-certificates"
		}]
	}, {
		title: "navigation.zone.security",
		url: "/security/waf",
		iconType: "shield",
		hasPermission: function(g) {
			return !(0, M.yD)(g) && (0, l.$n)(g, "waf", "firewall.rule")
		},
		pages: [{
			title: "navigation.zone.security.waf",
			url: "/security/waf"
		}, {
			title: "navigation.zone.security.bots",
			url: "/security/bots"
		}, {
			title: "navigation.zone.security.ddos",
			url: "/security/ddos"
		}, {
			title: "navigation.zone.security.settings",
			url: "/security/settings"
		}]
	}, {
		title: "navigation.zone.speed",
		url: "/speed/optimization",
		iconType: "bolt",
		hasPermission: function(g) {
			return !(0, M.yD)(g) && (0, l.$n)(g, "zone_settings", "setting")
		},
		pages: [{
			title: "navigation.zone.speed.optimization",
			url: "/speed/optimization"
		}]
	}, {
		title: "navigation.zone.caching",
		url: "/caching/tiered-cache",
		iconType: "drive",
		hasPermission: function(g) {
			return !(0, M.yD)(g) && (0, l.$n)(g, "zone_settings", "setting")
		},
		pages: [{
			title: "navigation.zone.caching.tiered_cache",
			url: "/caching/tiered-cache",
			hasPermission: function(g) {
				return (0, l.iY)(g)
			}
		}, {
			title: "navigation.zone.caching.configuration",
			url: "/caching/configuration"
		}]
	}, {
		title: "navigation.account.workers",
		url: "/workers",
		iconType: "edgeworker",
		hasPermission: function(g) {
			return !(0, M.yD)(g) && (0, l.$n)(g, "worker", "worker.route")
		}
	}, {
		title: "navigation.zone.rules",
		url: "/rules",
		iconType: "filter",
		hasPermission: function(g) {
			return !(0, M.yD)(g) && (0, l.$n)(g, "zone_settings", "page-rule")
		},
		pages: [{
			title: "navigation.zone.rules.page_rules",
			url: "/rules"
		}, {
			title: "navigation.zone.rules.snippets",
			url: "/rules/snippets",
			labels: ["alpha"],
			hasPermission: function(g) {
				return !!(0, x.GM)(g) && (0, l.$n)(g, "waf", "page-rule", "read")
			}
		}, {
			title: "navigation.zone.rules.transform_rules",
			url: "/rules/transform-rules",
			hasPermission: function(g) {
				return (0, l.$n)(g, "waf", "page-rule", "update")
			}
		}, {
			title: "navigation.zone.rules.origin_rules",
			url: "/rules/origin-rules",
			labels: ["beta"],
			hasPermission: function(g) {
				return (0, l.$n)(g, "waf", "page-rule", "read")
			}
		}, {
			title: "navigation.zone.rules.compression_rules",
			url: "/rules/compression-rules",
			labels: ["new"],
			hasPermission: function(g) {
				return (0, l.$n)(g, "waf", "page-rule", "read") && !!(0, M.rV)(g, "rulesets.response_compression_max_rules") && !!(0, r.z1)("compression-rules")(g)
			}
		}, {
			title: "navigation.zone.rules.settings",
			url: "/rules/settings",
			hasPermission: function(g) {
				return (0, l.$n)(g, "waf", "page-rule", "read")
			}
		}]
	}, {
		title: "navigation.zone.network",
		url: "/network",
		iconType: "network",
		hasPermission: function(g) {
			return !(0, M.yD)(g) && (0, l.$n)(g, "zone_settings", "setting")
		}
	}, {
		title: "navigation.zone.traffic",
		url: "/traffic",
		iconType: "reliability-load-balancer",
		hasPermission: function(g) {
			return (0, l.$n)(g, "lb", "load-balancer")
		},
		pages: [{
			title: "navigation.zone.traffic.argo",
			url: "/traffic",
			hasPermission: function(g) {
				return !(0, M.yD)(g)
			}
		}]
	}, {
		title: "navigation.zone.custom_pages",
		url: "/custom-pages",
		iconType: "wrench",
		hasPermission: function(g) {
			return !(0, M.yD)(g) && (0, l.$n)(g, "zone_settings", "custom-page")
		}
	}, {
		title: "navigation.zone.scrape_shield",
		url: "/content-protection",
		iconType: "file",
		hasPermission: function(g) {
			return !(0, M.yD)(g) && (0, l.$n)(g, "zone_settings", "setting")
		}
	}]
}